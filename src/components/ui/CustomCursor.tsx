"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // Inner cursor — fast spring
  const x = useSpring(mouseX, { stiffness: 600, damping: 35, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 600, damping: 35, mass: 0.4 });

  // Outer ring — slower spring for trailing lag
  const outerX = useSpring(mouseX, { stiffness: 160, damping: 22, mass: 0.8 });
  const outerY = useSpring(mouseY, { stiffness: 160, damping: 22, mass: 0.8 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;
    setIsPointer(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "a, button, [data-cursor-hover], input, textarea, select, label"
      );
      setHovered(!!el);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    // Hide native cursor
    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY, visible]);

  if (!isPointer) return null;

  return (
    <>
      {/* Engineering crosshair — inner cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none select-none"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.6 : 1,
          rotate: hovered ? 45 : 0,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { duration: 0.1 },
          rotate: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {/* Top arm */}
          <line x1="11" y1="0" x2="11" y2="7.5" stroke="#6C8CA5" strokeWidth="1.5" strokeLinecap="round" />
          {/* Bottom arm */}
          <line x1="11" y1="14.5" x2="11" y2="22" stroke="#6C8CA5" strokeWidth="1.5" strokeLinecap="round" />
          {/* Left arm */}
          <line x1="0" y1="11" x2="7.5" y2="11" stroke="#6C8CA5" strokeWidth="1.5" strokeLinecap="round" />
          {/* Right arm */}
          <line x1="14.5" y1="11" x2="22" y2="11" stroke="#6C8CA5" strokeWidth="1.5" strokeLinecap="round" />
          {/* Center dot — copper */}
          <circle cx="11" cy="11" r="2" fill={hovered ? "#DF6B30" : "#6C8CA5"} />
        </svg>
      </motion.div>

      {/* Outer engineering ring — lags behind */}
      <motion.div
        className="fixed top-0 left-0 z-[998] pointer-events-none select-none"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          border: `1px solid ${hovered ? "rgba(223,107,48,0.7)" : "rgba(108,140,165,0.55)"}`,
          transition: "border-color 0.25s ease",
        }}
        animate={{
          opacity: visible ? (hovered ? 0.85 : 0.38) : 0,
          width: hovered ? 54 : clicking ? 22 : 34,
          height: hovered ? 54 : clicking ? 22 : 34,
        }}
        transition={{
          opacity: { duration: 0.2 },
          width: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {/* Corner ticks — only when hovering */}
        {hovered && (
          <>
            <span className="absolute top-0.5 left-0.5 w-2 h-px" style={{ backgroundColor: "#DF6B30" }} />
            <span className="absolute top-0.5 left-0.5 w-px h-2" style={{ backgroundColor: "#DF6B30" }} />
            <span className="absolute top-0.5 right-0.5 w-2 h-px" style={{ backgroundColor: "#DF6B30" }} />
            <span className="absolute top-0.5 right-0.5 w-px h-2" style={{ backgroundColor: "#DF6B30" }} />
            <span className="absolute bottom-0.5 left-0.5 w-2 h-px" style={{ backgroundColor: "#DF6B30" }} />
            <span className="absolute bottom-0.5 left-0.5 w-px h-2" style={{ backgroundColor: "#DF6B30" }} />
            <span className="absolute bottom-0.5 right-0.5 w-2 h-px" style={{ backgroundColor: "#DF6B30" }} />
            <span className="absolute bottom-0.5 right-0.5 w-px h-2" style={{ backgroundColor: "#DF6B30" }} />
          </>
        )}
      </motion.div>
    </>
  );
}
