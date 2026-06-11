"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrambleText({
  text,
  className,
  style,
  delay = 0,
  duration = 900,
  as: Tag = "span",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(text);
  const started = useRef(false);
  const raf = useRef(0);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const chars = text.split("");
    let startTs: number | null = null;

    const frame = (ts: number) => {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs - delay;

      if (elapsed < 0) {
        // Delay period: full scramble
        setDisplay(chars.map((c) => (c === " " || c === "\n" ? c : CHARS[~~(Math.random() * CHARS.length)])).join(""));
        raf.current = requestAnimationFrame(frame);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic: starts fast, slows down
      const eased = 1 - Math.pow(1 - progress, 3);

      const result = chars.map((char, i) => {
        if (char === " " || char === "\n") return char;
        // This character resolves when eased crosses its position fraction
        const threshold = i / chars.length;
        if (eased >= threshold) return char;
        return CHARS[~~(Math.random() * CHARS.length)];
      });

      setDisplay(result.join(""));

      if (progress < 1) {
        raf.current = requestAnimationFrame(frame);
      } else {
        setDisplay(text);
      }
    };

    raf.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf.current);
  }, [inView, text, delay, duration]);

  const props = {
    className,
    style: { fontFamily: "inherit", ...style },
    children: display,
  };

  if (Tag === "h1") return <h1 ref={ref as React.RefObject<HTMLHeadingElement>} {...props} />;
  if (Tag === "h2") return <h2 ref={ref as React.RefObject<HTMLHeadingElement>} {...props} />;
  if (Tag === "h3") return <h3 ref={ref as React.RefObject<HTMLHeadingElement>} {...props} />;
  if (Tag === "p") return <p ref={ref as React.RefObject<HTMLParagraphElement>} {...props} />;
  return <span ref={ref as React.RefObject<HTMLSpanElement>} {...props} />;
}
