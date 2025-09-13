"use client";

import { useEffect, useRef, useState } from "react";

export default function StartAnimationBgLock({
  delay = 400,
  duration = 1600,
}: { delay?: number; duration?: number }) {
  const [faded, setFaded] = useState(false);
  const [pointerNone, setPointerNone] = useState(false);
  const tFade = useRef<number | null>(null);
  const tEnd = useRef<number | null>(null);

  useEffect(() => {
    // compute scrollbar width and lock scroll while keeping layout width stable
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const body = document.body;
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    body.style.overflow = "hidden";

    tFade.current = window.setTimeout(() => setFaded(true), delay);
    tEnd.current = window.setTimeout(() => {
      setPointerNone(true);
      // restore
      body.style.overflow = "";
      body.style.paddingRight = "";
    }, delay + duration);

    return () => {
      if (tFade.current) window.clearTimeout(tFade.current);
      if (tEnd.current) window.clearTimeout(tEnd.current);
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [delay, duration]);

  return (
    <div
      className="fixed inset-[-10px] bg-black1"
      style={{
        opacity: faded ? 0 : 1,
        transition: `opacity ${duration}ms ease-out ${delay}ms`,
        pointerEvents: pointerNone ? "none" : "auto",
        zIndex: 999,
      }}
    />
  );
}
