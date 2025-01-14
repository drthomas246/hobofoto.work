import { motion } from "framer-motion";
import { createRef, useEffect, useRef, useState, type RefObject } from "react";
import { useSwipeable } from "react-swipeable";

interface HeroComponentProps {
  ref: React.RefObject<HTMLDivElement | null>;
  h1?: boolean;
  href?: string;
  languageTitle?: string;
  title: string;
  languageSummary?: string;
  summary?: string;
  image: string;
}
const Scroll = ({ className }: { className: string }) => {
  return (
    <div className={`scroll-btn ${className}`}>
      <svg className="scroll-svg">
        <desc>Created with Snap</desc>
        <rect
          x="1"
          y="1"
          width="30"
          height="48"
          rx="19"
          ry="15"
          stroke="#000000"
          fill="none"
          className="rect_1"
        ></rect>
        <rect
          className="animated"
          x="1"
          y="1"
          width="30"
          height="48"
          rx="19"
          ry="15"
          stroke="#000000"
          fill="none"
        ></rect>
        <circle
          className="ball"
          cx="16"
          cy="16.638031364511352"
          r="2.8000000000000003"
          fill="#000000"
          stroke="none"
        ></circle>
      </svg>
      <p className="text">SCROLL</p>
    </div>
  );
};

const HeroComponent = ({
  ref,
  h1 = false,
  href = "",
  languageTitle = "",
  title,
  languageSummary = "",
  summary = "",
  image,
}: HeroComponentProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  // 各文字のアニメーション設定
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 各文字を0.1秒ずつずらしてアニメーション
      },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="hero_content" ref={ref}>
      {h1 ? (
        <div className="string">
          <motion.h1
            className="hero-title english hobofoto"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={child}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="summary english"
          >
            HoBo every day FoTo.
          </motion.div>
        </div>
      ) : (
        <>
          <div className="string">
            <a href={href}>
              <motion.h2
                className={`hero-title ${languageTitle} ${
                  isAnimating ? "marker" : ""
                }`}
                variants={container}
                initial="hidden"
                whileInView="visible"
                onAnimationStart={() => setIsAnimating(false)}
                onAnimationComplete={() => setIsAnimating(true)}
              >
                {title.split("").map((char, index) => (
                  <motion.span key={index} variants={child}>
                    {char === " " ? "\u00A0" : char} {/* 空白を正しく扱う */}
                  </motion.span>
                ))}
              </motion.h2>
            </a>
          </div>
          <div className="summary-string">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className={`summary ${languageSummary}`}
            >
              {summary}
            </motion.div>
          </div>
        </>
      )}

      <Scroll className="" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="hero-image"
      >
        <img src={image} alt="top" className="hero-image" />
      </motion.div>
    </div>
  );
};

const Title = ({ images }: { images: any }) => {
  const hero = useRef<RefObject<HTMLDivElement | null>[]>([]);
  for (let index = 0; index < 6; index++) {
    hero.current[index] = createRef<HTMLDivElement>();
  }
  const [number, setNumber] = useState(0);

  const handlers = useSwipeable({
    onSwiped: (event) => {
      console.log(event);
      if (event.dir == "Up") {
        if (number < 5) {
          setNumber(number + 1);
        }
      }
      if (event.dir == "Down") {
        if (number > 0) {
          setNumber(number - 1);
        }
      }
    },
    trackMouse: true, //マウス操作でのスワイプを許可する場合はtrue
  });

  const handleWheel = (event: any) => {
    if (event.deltaY > 0) {
      if (number < 5) {
        setNumber(number + 1);
      }
    } else {
      if (number > 0) {
        setNumber(number - 1);
      }
    }
  };

  useEffect(() => {
    for (let index = 0; index < 6; index++) {
      hero.current[index].current!.style.display = "none";
    }
    hero.current[number].current!.style.display = "block";
  }, [number]);
  return (
    <div className="hero" onWheel={handleWheel} {...handlers}>
      <HeroComponent
        ref={hero.current[0]}
        h1={true}
        title="HoBoFoTo.work"
        image={images[0].src}
      />
      <HeroComponent
        ref={hero.current[1]}
        href="/blog"
        languageTitle="japanese"
        title="ブログ"
        languageSummary="japanese"
        summary="技術的なことから日々のことまで"
        image={images[1].src}
      />
      <HeroComponent
        ref={hero.current[2]}
        href="/photo"
        languageTitle="japanese"
        title="フォト"
        languageSummary="japanese"
        summary="四季折々の写真達"
        image={images[2].src}
      />
      <HeroComponent
        ref={hero.current[3]}
        href="/software"
        languageTitle="japanese"
        title="ソフトウェア"
        languageSummary="japanese"
        summary="自作ソフトウェアなど"
        image={images[3].src}
      />
      <HeroComponent
        ref={hero.current[4]}
        href="/math"
        languageTitle="japanese"
        title="数学"
        languageSummary="japanese"
        summary="中学数学をできるだけていねいに"
        image={images[4].src}
      />
      <HeroComponent
        ref={hero.current[5]}
        href="/aboutme"
        languageTitle="english"
        title="About me"
        languageSummary="japanese"
        summary="ポートフォリオや連絡先など"
        image={images[5].src}
      />
    </div>
  );
};

export default Title;
