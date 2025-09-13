"use client";

import React from "react";
import { motion } from "motion/react";

const DURATION = 0.3; // animation duration per letter
const LETTER_STAGGER = 0.1; // seconds between letters
const BASE_DELAY = 2; // seconds before the letter-by-letter animation starts

export default function AnimatedHeading() {
  // Keep the same visual structure:
  const parts = [
    { text: "Gemeinsam Ihre ", colorClass: "" },
    { text: "\n", br: true }, // placeholder for <br/>
    { text: "Digitale Welt", colorClass: "text-violet1" },
    { text: " erobern", colorClass: "" },
  ];

  let letterIndex = 0; // global index for stagger delays

  return (
    <h1
      className="lg:text-5xl text-4xl leading-[120%] text-center font-robotoMono uppercase tracking-[1px]"
      aria-label="Gemeinsam Ihre Digitale Welt erobern"
    >
      {parts.map((part, partIdx) => {
        if (part.br) return <br key={`br-${partIdx}`} />;

        // split into tokens and preserve spaces so we can render them normally
        const tokens = part.text.split(/(\s+)/);

        return (
          <span
            key={`part-${partIdx}`}
            className={part.colorClass ? part.colorClass : ""}
            aria-hidden="true"
          >
            {tokens.map((token, tIdx) => {
              // skip empty tokens entirely (prevents empty inline-blocks)
              if (token === "") return null;

              // if token is whitespace(s), render as plain text so it can break/wrap
              if (/^\s+$/.test(token)) {
                return (
                  <span key={`space-${partIdx}-${tIdx}`} aria-hidden="true">
                    {token}
                  </span>
                );
              }

              // token is a word (no spaces) — prevent letters from wrapping inside it
              const chars = Array.from(token);
              return (
                <span
                  key={`word-${partIdx}-${tIdx}`}
                  // inline-block + nowrap => the whole word wraps as a single unit
                  style={{ display: "inline-block", whiteSpace: "nowrap" }}
                  aria-hidden="true"
                >
                  {chars.map((ch, i) => {
                    const thisIndex = letterIndex++;
                    const delay = BASE_DELAY + thisIndex * LETTER_STAGGER;

                    return (
                      <motion.span
                        key={`char-${partIdx}-${tIdx}-${i}`}
                        style={{ display: "inline-block", whiteSpace: "pre" }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: DURATION,
                          ease: "easeOut",
                          delay,
                        }}
                      >
                        {ch}
                      </motion.span>
                    );
                  })}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
