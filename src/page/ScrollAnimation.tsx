import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import clsx from "clsx";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ScrollAnimation = () => {
  useGSAP(() => {
    gsap.from(".page1 .box", {
      x: 200,
      duration: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1 .box",
        scroller: "body",
        markers: true,
        start: "top 30%",
      },
    });

    gsap.from(".page2 h1", {
      x: 200,
      duration: 0.7,
      opacity: 0,
      yoyo: true,
      scrollTrigger: {
        trigger: ".page2 h1",
        // scrub: 1,
        scroller: "body",
        markers: true,
        start: "top 50%",
      },
    });

    gsap.from(".page2 h2", {
      x: -200,
      duration: 0.7,
      opacity: 0,
      yoyo: true,
      scrollTrigger: {
        trigger: ".page2 h2",
        scroller: "body",
        markers: true,
        // scrub: 1,
        start: "top 50%",
      },
    });

    gsap.from(".page3 .box", {
      borderRadius: "40px",
      scale: 0.8,
      rotate: 360,
      repeat: 1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        markers: true,
        start: "top 50%",
      },
    });
  });

  return (
    <div className={clsx("h-[calc(100vh-48px)]")}>
      <div className="page1">
        <div className="box"></div>
      </div>
      <div className="page2">
        <div className="boxx text-center text-white text-4xl font-medium max-w-[800px]">
          <h1>We re a designing, branding agenc</h1>
          <h2 className="mt-3.5">
            With more than two decades of experience, advertising and designing.{" "}
          </h2>
        </div>
      </div>
      <div className="page3">
        <div className="box"></div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
