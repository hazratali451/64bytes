"use client";

import { ReactElement, useState } from "react";
import { AnimatePresence, motion, easeInOut } from "motion/react";

type FAQItem = {
    title: string | ReactElement;
    content?: string | ReactElement; // optional, falls back to global txt
};

type FAQProps = {
    items: FAQItem[];
    defaultContent?: string;
    showNumber?:boolean;
};

export default function FAQ({
    items,
    defaultContent,
    showNumber = true,
}: FAQProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // shared transition for content, icon, and heading
    const transition = { duration: 0.3, easing: easeInOut };

    return (
        <div className='space-y-6'>
            {items.map((item, i) => {
                const isActive = activeIndex === i;

                return (
                    <div key={i} className={`border-b border-gray1/25 pb-6 `}>
                        <button
                            onClick={() => toggle(i)}
                            className='w-full flex justify-between items-center text-left'
                            aria-expanded={isActive}
                            aria-controls={`faq-content-${i}`}
                        >
                            <div>
                                {showNumber && (
                                    <p className='text-sm mb-2 font-robotoMono leading-normal tracking-[1px] text-violet1'>
                                        {String(i + 1).padStart(2, "0")}
                                    </p>
                                )}

                                {/* animated heading: scale from left for smooth "size" change */}
                                <motion.h3
                                    className='text-gray1 leading-normal origin-left inline-block'
                                    animate={{
                                        fontSize: isActive ? "20px" : "16px",
                                        color: isActive ? "#F4F2ED" : "#B4B4B4",
                                    }}
                                    transition={transition}
                                    style={{ display: "inline-block" }}
                                >
                                    {item.title}
                                </motion.h3>
                            </div>

                            {/* animated icon */}
                            <motion.svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='26'
                                height='26'
                                viewBox='0 0 26 26'
                                fill='none'
                                // rotate 45deg when active
                                animate={{ rotate: isActive ? 45 : 0 }}
                                transition={transition}
                                className='origin-center'
                                aria-hidden
                            >
                                <line
                                    x1='13'
                                    y1='0'
                                    x2='13'
                                    y2='26'
                                    stroke='#F4F2ED'
                                    strokeWidth='2'
                                    className="md:stroke-2 stroke-1"
                                />
                                <line
                                    y1='13'
                                    x2='26'
                                    y2='13'
                                    stroke='#F4F2ED'
                                    strokeWidth='2'
                                    className="md:stroke-2 stroke-1"
                                />
                            </motion.svg>
                        </button>

                        {/* animated panel: height + opacity */}
                        <AnimatePresence initial={false}>
                            {isActive && (
                                <motion.div
                                    id={`faq-content-${i}`}
                                    role='region'
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={transition}
                                    style={{ overflow: "hidden" }}
                                    className=' text-gray1 leading-normal text-base mt-2'
                                >
                                    {/* inner wrapper to ensure text fades smoothly */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={transition}
                                    >
                                        {item.content ?? defaultContent}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
