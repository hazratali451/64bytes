"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import logo1 from "@/../public/assets/service/logoSlider/1.svg";
import logo2 from "@/../public/assets/service/logoSlider/2.svg";
import logo3 from "@/../public/assets/service/logoSlider/3.svg";
import logo4 from "@/../public/assets/service/logoSlider/4.svg";
import logo5 from "@/../public/assets/service/logoSlider/5.svg";
import logo6 from "@/../public/assets/service/logoSlider/6.svg";
import logo7 from "@/../public/assets/service/logoSlider/7.svg";
import logo8 from "@/../public/assets/service/logoSlider/8.svg";
import logo9 from "@/../public/assets/service/logoSlider/9.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

export default function LogoMarquee({ pxPerSecond = 100 }: { pxPerSecond?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(20);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    function update() {
      if (!trackRef.current) return;
      const children = trackRef.current.children;
      if (!children.length) return;

      let totalWidth = 0;
      for (let i = 0; i < logos.length; i++) {
        const el = children[i] as HTMLElement;
        totalWidth += el.offsetWidth + 80; // include gap
      }

      setDistance(totalWidth);
      setDuration(totalWidth / pxPerSecond);
    }

    update();
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
    };
  }, [pxPerSecond]);

  const slides = [...logos, ...logos];

  return (
    <div
      className="logo-marquee"
      style={{ overflow: "hidden" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="logo-marquee-track flex md:gap-20 gap-12 items-center"
        style={{
          // use longhand animation properties instead of the `animation` shorthand
          animationName: "marquee",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {slides.map((logo, i) => (
          <div key={i} style={{ flex: "0 0 auto" }}>
            <Image
              loading="eager"
              src={logo}
              alt={`logo-${i + 1}`}
              className="object-contain object-center w-auto h-10 md:h-auto"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${distance}px); }
        }

        .logo-marquee-track {
          /* no inline shorthand needed here */
        }
      `}</style>
    </div>
  );
}
