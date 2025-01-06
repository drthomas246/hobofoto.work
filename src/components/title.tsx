import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

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

const Title = ({ images }: { images: any }) => {
  // 注意：自分用なのでコードがめちゃくちゃ汚い
  // ノート：いつかきれいに書き直したい(useEffect周りとか)
  const hero1 = useRef<HTMLDivElement>(null);
  const hero2 = useRef<HTMLDivElement>(null);
  const hero3 = useRef<HTMLDivElement>(null);
  const hero4 = useRef<HTMLDivElement>(null);
  const hero5 = useRef<HTMLDivElement>(null);
  const [number, setNumber] = useState(0);

  const handleWheel = (event: any) => {
    if (event.deltaY > 0) {
      if (number < 4) {
        setNumber(number + 1);
      }
    } else {
      if (number > 0) {
        setNumber(number - 1);
      }
    }
  };

  useEffect(() => {
    const jsText = document.querySelectorAll(".hero-title");
    jsText.forEach((target) => {
      let newText = "";
      const text = target.textContent;
      const result = text!.split("");
      for (let i = 0; i < result.length; i++) {
        newText += "<span>" + result[i] + "</span>";
      }
      target.innerHTML = newText;
    });
  });

  useEffect(() => {
    switch (number) {
      case 0:
        hero1.current!.style.display = "block";
        hero2.current!.style.display = "none";
        hero3.current!.style.display = "none";
        hero4.current!.style.display = "none";
        hero5.current!.style.display = "none";
        break;
      case 1:
        hero1.current!.style.display = "none";
        hero2.current!.style.display = "block";
        hero3.current!.style.display = "none";
        hero4.current!.style.display = "none";
        hero5.current!.style.display = "none";
        break;
      case 2:
        hero1.current!.style.display = "none";
        hero2.current!.style.display = "none";
        hero3.current!.style.display = "block";
        hero4.current!.style.display = "none";
        hero5.current!.style.display = "none";
        break;
      case 3:
        hero1.current!.style.display = "none";
        hero2.current!.style.display = "none";
        hero3.current!.style.display = "none";
        hero4.current!.style.display = "block";
        hero5.current!.style.display = "none";
        break;
      case 4:
        hero1.current!.style.display = "none";
        hero2.current!.style.display = "none";
        hero3.current!.style.display = "none";
        hero4.current!.style.display = "none";
        hero5.current!.style.display = "block";
        break;
    }
    gsap.set(".hero-title span", {
      opacity: 0,
      y: 100,
    });
    gsap.set(".marker", {
      backgroundSize: "0 .3em",
    });
    gsap.set(".hero-image", {
      opacity: 0,
    });
    gsap.set(".scroll-btn", {
      opacity: 0,
    });
    gsap.set(".summary", {
      opacity: 0,
      y: 30,
    });
    gsap
      .timeline()
      .to(".hero-image", {
        opacity: 1,
      })
      .to(
        ".hero-title span",
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 1,
            from: "start",
            ease: "sine.in",
          },
        },
        "=0.1"
      )
      .to(
        ".marker",
        {
          backgroundSize: "100% .3em",
        },
        "-=0.2"
      )
      .to(
        ".summary",
        {
          opacity: 1,
          y: 0,
        },
        "-=0.2"
      )
      .to(
        ".scroll-btn",
        {
          opacity: 1,
        },
        "-=0.2"
      );
  }, [number]);

  return (
    <div className="hero" onWheel={handleWheel}>
      <div className="hero_1" ref={hero1}>
        <div className="hero-left left-string">
          <h1 className="hero-title english hobofoto">HoBoFoTo.work</h1>
          <div className="summary english">HoBo every day FoTo.</div>
        </div>
        <Scroll className="scroll-left top" />
        <div className="hero-right">
          <img src={images[0].src} alt="top" className="hero-image" />
        </div>
      </div>
      <div className="hero_2" ref={hero2}>
        <div className="hero-right right-string">
          <a href="/blog">
            <h2 className="hero-title japanese marker">ブログ</h2>
          </a>
        </div>
        <div className="summary_right-string">
          <div className="summary japanese">
            技術的なことから日々のことまで
          </div>
        </div>
        <Scroll className="scroll-right" />
        <div className="hero-left">
          <img src={images[1].src} alt="top" className="hero-image" />
        </div>
      </div>
      <div className="hero_3" ref={hero3}>
        <div className="hero-left left-string">
          <a href="/photo">
            <h2 className="hero-title japanese marker">フォト</h2>
          </a>
        </div>
        <div className="summary_left-string">
          <div className="summary japanese">四季折々の写真達</div>
        </div>
        <Scroll className="scroll-left" />
        <div className="hero-right">
          <img src={images[2].src} alt="top" className="hero-image" />
        </div>
      </div>
      <div className="hero_4" ref={hero4}>
        <div className="hero-right right-string">
          <a href="/software">
            <h2 className="hero-title japanese marker">ソフトウェア</h2>
          </a>
        </div>
        <div className="summary_right-string">
          <div className="summary japanese">自作ソフトウェアなど</div>
        </div>
        <Scroll className="scroll-right" />
        <div className="hero-left">
          <img src={images[3].src} alt="top" className="hero-image" />
        </div>
      </div>
      <div className="hero_5" ref={hero5}>
        <div className="hero-left left-string">
          <a href="/aboutme">
            <h2 className="hero-title english marker">About&nbsp;me</h2>
          </a>
        </div>
        <div className="summary_left-string">
          <div className="summary japanese">ポートフォリオや連絡先など</div>
        </div>
        <Scroll className="scroll-left bottom" />
        <div className="hero-right">
          <img src={images[4].src} alt="top" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Title;
