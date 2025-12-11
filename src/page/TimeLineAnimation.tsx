import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

const TimeLineAnimation = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".heading1", {
      y: 100,
      duration: 0.6,
      opacity: 0,
      delay: 1,
    });
    tl.from(".heading2", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div
      className={clsx(
        "h-[calc(100vh-48px)] flex items-center justify-center text-center "
      )}
    >
      <div className="text-3xl uppercase font-medium">
        <div className="heading1">
          Committed to building high performant, scalable apps, consistently.
        </div>
        <div className="heading2">scalable apps, consistently</div>
      </div>
    </div>
  );
};

export default TimeLineAnimation;
