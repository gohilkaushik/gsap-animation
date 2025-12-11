import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Demo = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const main = mainRef.current;
    const cursor = cursorRef.current;

    if (!main || !cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        // ease: "power3.out",
      });
    };

    main.addEventListener("mousemove", moveCursor);

    return () => {
      main.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="main" ref={mainRef}>
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
};

export default Demo;
