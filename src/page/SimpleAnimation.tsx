import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";

const SimpleAnimation = () => {
  useGSAP(() => {
    gsap.to(".box1", {
      x: 800,
      duration: 1,
      delay: 1.5,
      rotate: 360,
      // repeat: Infinity,
      // yoyo: true,
    });
  });

  return (
    <div className={clsx("h-[calc(100vh-48px)] flex items-center")}>
      <div className="box1">1</div>
    </div>
  );
};

export default SimpleAnimation;
