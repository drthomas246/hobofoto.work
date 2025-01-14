import type { AstroIntegration } from "astro";
import fs, { createWriteStream } from "fs";
import path from "path";
import { SitemapStream } from "sitemap";
import { fileURLToPath } from "url";

const sitemap = (): AstroIntegration => {
  return {
    name: "sitemap",
    hooks: {
      "astro:build:done": async ({ dir, pages }) => {
        const hostname = "https://www.hobofoto.work/";
        const sms = new SitemapStream({ hostname });
        const excludeSlugs = ["404", "sitepolicy", "privacypolicy", "aboutme/confirm", "aboutme/thanks"];
        const destinationDir = fileURLToPath(dir);
        const outputFileName = "sitemap.xml";
        const outputPath = path.join(destinationDir, outputFileName);

        // ディレクトリ確認
        if (!fs.existsSync(destinationDir)) {
          fs.mkdirSync(destinationDir, { recursive: true });
        }

        console.log("Generating sitemap...");
        pages.forEach(({ pathname }) => {
          const slug = pathname.slice(0, -1);
          if (!excludeSlugs.includes(slug)) {
            sms.write(hostname + pathname);
          }
        });

        sms.end();

        const writeStream = createWriteStream(outputPath);
        sms.pipe(writeStream);

        await new Promise((resolve, reject) => {
          writeStream.on("finish", () => {
            console.log(`Sitemap generated at: ${outputPath}`);
            resolve(null);
          });
          writeStream.on("error", (err) => {
            console.error("Error writing sitemap:", err);
            reject(err);
          });
        });
      },
    },
  };
};

export default sitemap;
