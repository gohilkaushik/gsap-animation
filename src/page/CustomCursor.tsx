import { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });

  // Smooth animation loop using RAF
  const animateCursor = useCallback(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const dx = mousePosition.current.x - cursorPosition.current.x;
    const dy = mousePosition.current.y - cursorPosition.current.y;

    // Smooth interpolation
    cursorPosition.current.x += dx * 0.15;
    cursorPosition.current.y += dy * 0.15;

    cursor.style.transform = `translate3d(${cursorPosition.current.x - 12}px, ${
      cursorPosition.current.y - 12
    }px, 0)`;

    animationRef.current = requestAnimationFrame(animateCursor);
  }, []);

  // Optimized mouse move handler
  const handleMouseMove = useCallback((e: any) => {
    mousePosition.current.x = e.clientX;
    mousePosition.current.y = e.clientY;
  }, []);

  const handleMouseEnter = useCallback(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.opacity = "1";
      cursor.style.transform = `translate3d(${
        mousePosition.current.x - 12
      }px, ${mousePosition.current.y - 12}px, 0) scale(1)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.opacity = "0";
      cursor.style.transform = `translate3d(${
        mousePosition.current.x - 12
      }px, ${mousePosition.current.y - 12}px, 0) scale(0.5)`;
    }
  }, []);

  const handleElementEnter = useCallback(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate3d(${
        cursorPosition.current.x - 12
      }px, ${cursorPosition.current.y - 12}px, 0) scale(1.5)`;
    }
  }, []);

  const handleElementLeave = useCallback(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate3d(${
        cursorPosition.current.x - 12
      }px, ${cursorPosition.current.y - 12}px, 0) scale(1)`;
    }
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const mainContent = mainRef.current;

    if (!cursor || !mainContent) return;

    // Initialize cursor
    cursor.style.opacity = "0";
    cursor.style.transform = "translate3d(-50px, -50px, 0) scale(0.5)";

    // Start animation loop
    animationRef.current = requestAnimationFrame(animateCursor);

    // Event listeners with passive option for better performance
    mainContent.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });
    mainContent.addEventListener("mouseenter", handleMouseEnter, {
      passive: true,
    });
    mainContent.addEventListener("mouseleave", handleMouseLeave, {
      passive: true,
    });

    // Interactive elements
    const interactiveElements = mainContent.querySelectorAll(".hover-cursor");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementEnter, { passive: true });
      el.addEventListener("mouseleave", handleElementLeave, { passive: true });
    });

    return () => {
      // Cleanup
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      mainContent.removeEventListener("mousemove", handleMouseMove);
      mainContent.removeEventListener("mouseenter", handleMouseEnter);
      mainContent.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementEnter);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [
    animateCursor,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleElementEnter,
    handleElementLeave,
  ]);

  return (
    <>
      {/* Optimized Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 transition-opacity duration-200 will-change-transform"
        style={{
          background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
          borderRadius: "50%",
          mixBlendMode: "difference",
          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
        }}
      />

      {/* Main Content */}
      <div className="flex justify-center items-center m-8 min-h-screen cursor-none bg-gradient-to-br from-slate-50 to-slate-100">
        <div
          ref={mainRef}
          className="max-w-sm rounded-xl overflow-hidden shadow-xl bg-white hover-cursor transition-transform duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Mountain sunset landscape"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">
              Mountain Serenity
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Experience the breathtaking beauty of golden hour as it paints the
              mountain peaks in warm, ethereal light.
            </p>
          </div>

          <div className="px-6 pt-4 pb-6">
            {["#photography", "#mountains", "#sunset", "#nature"].map(
              (tag, index) => (
                <span
                  key={tag}
                  className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 hover-cursor transition-all duration-200 hover:from-blue-200 hover:to-purple-200 hover:shadow-md"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Additional interactive elements */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4">
          <button className="hover-cursor bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="hover-cursor bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
