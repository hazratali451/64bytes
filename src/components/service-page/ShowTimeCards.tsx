"use client";

// ==========
// 
// ===========
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import Button from "../global/Button";

const items = [
    {
        image: "/assets/service/showtime/1.jpg",
        title: "Kineo Medical",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/2.jpg",
        title: "Higreen!",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/3.jpg",
        title: "Calmaroi",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/4.jpg",
        title: "Fidelius",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/5.jpg",
        title: "Cannadoc24",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/5.jpg",
        title: "Cannadoc24",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/1.jpg",
        title: "Kineo Medical",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/2.jpg",
        title: "Higreen!",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/3.jpg",
        title: "Calmaroi",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/4.jpg",
        title: "Fidelius",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/service/showtime/5.jpg",
        title: "Cannadoc24",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
];

export default function ShowtimeDynamic() {
    const [active, setActive] = useState(0);
    const total = items.length;

    const fmt = (n: number) => String(n + 1).padStart(2, "0");

    function getPaginationDisplay() {
        if (total <= 7) {
            return Array.from({ length: total }, (_, i) => i);
        }

        const first = 0;
        const last = total - 1;

        if (active <= 2) {
            return [
                0,
                1,
                2,
                { type: "ellipsis", target: 3, side: "right" },
                last,
            ];
        }

        if (active >= total - 3) {
            return [
                first,
                { type: "ellipsis", target: total - 4, side: "left" },
                total - 3,
                total - 2,
                total - 1,
            ];
        }

        const leftTarget = Math.max(active - 3, 1);
        const rightTarget = Math.min(active + 3, total - 2);

        return [
            first,
            { type: "ellipsis", target: leftTarget, side: "left" },
            active - 1,
            active,
            active + 1,
            { type: "ellipsis", target: rightTarget, side: "right" },
            last,
        ];
    }

    const pagination = getPaginationDisplay();

    // Framer Motion animation settings
    const anim = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.8, ease: easeInOut },
    };

    return (
        <div className='px-5 relative z-1'>
            <div className='md:max-w-[780px] max-w-[500px] mx-auto md:mt-10 mt-6 flex justify-between items-center gap-4 '>
                {/* left pagination column (kept classes exactly) */}
                <div className='w-5.5 flex flex-col gap-6 font-robotoMono text-center text-base leading-normal tracking-[1px] cursor-default'>
                    {pagination.map((p, idx) => {
                        if (typeof p === "object" && p.type === "ellipsis") {
                            return (
                                <p
                                    key={`e-${idx}`}
                                    onClick={() => setActive(p.target)}
                                    className='opacity-50 cursor-pointer'
                                    title={
                                        p.side === "left"
                                            ? "previous pages"
                                            : "more pages"
                                    }
                                >
                                    …
                                </p>
                            );
                        }

                        const i = p as number;
                        const isActive = i === active;

                        return (
                            <p
                                key={i}
                                onClick={() => setActive(i)}
                                className={
                                    isActive
                                        ? "opacity-100"
                                        : "opacity-50 cursor-pointer"
                                }
                            >
                                {fmt(i)}
                            </p>
                        );
                    })}
                </div>

                {/* center content (kept exact classes/structure) */}
                {/* Note: wrapper is set relative (no visual change) and we add an invisible placeholder to preserve layout */}
                <div className='relative md:block hidden'>
                    {/* placeholder reserves the exact same space so layout doesn't shift */}
                    <div
                        aria-hidden
                        className='max-w-[580px] w-full p-10 flex gap-10 rounded-sm bg-white1/4 invisible'
                    >
                        {items[active].image ? (
                            <div
                                style={{ width: 240, height: 312 }}
                                className='rounded-[3px] object-contain object-center w-[240px] h-[312px]'
                            />
                        ) : (
                            <div
                                style={{ width: 240, height: 312 }}
                                className='rounded-[3px]'
                            />
                        )}

                        <div className='flex flex-col gap-4 justify-center'>
                            <h3 className='text-2xl leading-[34px] tracking-[1px] uppercase font-robotoMono'>
                                {items[active].title}
                            </h3>
                            <p className='text-base leading-normal text-gray1'>
                                {items[active].desc}
                            </p>
                        </div>
                    </div>

                    <AnimatePresence>
                        <motion.div
                            key={active} // ensures React knows it's a different element
                            initial={anim.initial}
                            animate={anim.animate}
                            exit={anim.exit}
                            transition={anim.transition}
                            // absolutely positioned so entering + exiting overlap
                            className='absolute top-0 left-0 w-full p-10 flex gap-10 rounded-sm bg-white1/4'
                        >
                            {items[active].image ? (
                                <Image
                                    src={items[active].image}
                                    width={240}
                                    height={312}
                                    alt=''
                                    className='rounded-[3px] object-contain object-center w-[240px] h-[312px]'
                                />
                            ) : (
                                <div
                                    style={{ width: 240, height: 312 }}
                                    className='rounded-[3px]'
                                />
                            )}

                            <div className='flex flex-col gap-4 justify-center'>
                                <h3 className='text-2xl leading-[34px] tracking-[1px] uppercase font-robotoMono'>
                                    {items[active].title}
                                </h3>
                                <p className='text-base leading-normal text-gray1'>
                                    {items[active].desc}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className='relative md:hidden'>
                    {/* placeholder reserves the exact same space so layout doesn't shift */}
                    <div
                        aria-hidden
                        className='max-w-[580px] w-full p-3 flex gap-10 rounded-sm bg-white1/4 invisible'
                    >
                        {items[active].image ? (
                            <div
                                style={{ width: 235, height: 312 }}
                                className='rounded-[3px] object-contain object-center w-[235px] h-[312px]'
                            />
                        ) : (
                            <div
                                style={{ width: 235, height: 312 }}
                                className='rounded-[3px]'
                            />
                        )}
                    </div>

                    <AnimatePresence>
                        {/* <div className='absolute top-0 left-0 w-full flex justify-center'> */}
                            <motion.div
                                key={active} // ensures React knows it's a different element
                                initial={{height:0, y: 300, opacity: 1 ,x:'-50%'}}
                                animate={{height:336, y: 0, opacity: 1,x:'-50%' }}
                                exit={{height:336, y: 0, opacity: 0 ,x:'-50%'}}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeInOut",
                                }}
                                // absolutely positioned so entering + exiting overlap
                                className='p-3 absolute top-0  left-1/2 flex gap-10 rounded-sm bg-white1/4  overflow-hidden'
                            >
                                {items[active].image ? (
                                    <div className='flex  justify-center w-full h-full'>
                                        <motion.div
                                            initial={{ width: 100, }}
                                            animate={{ width: 235 }}
                                            exit={{width:235}}
                                            transition={{
                                                duration: 0.7,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <Image
                                                src={items[active].image}
                                                width={235}
                                                height={312}
                                                alt=''
                                                className='rounded-[3px] object-cover object-center w-[235px] h-[312px] overflow-hidden'
                                            />
                                        </motion.div>
                                    </div>
                                ) : (
                                    <div
                                        style={{ width: 235, height: 312 }}
                                        className='rounded-[3px] '
                                    />
                                )}
                            </motion.div>
                        {/* </div> */}
                    </AnimatePresence>
                </div>

                {/* right spacer */}
                <div className='w-5.5 '></div>
            </div>

            <div
                className='flex justify-center overflow-hidden transition-[max-height] duration-800 ease-in-out'
                style={{
                    maxHeight: active === items.length - 1 ? "84px" : "0px",
                }}
            >
                <div className=''>
                    <Button variant='outline' className='mt-10'>
                        Alle Projekte entdecken
                    </Button>
                </div>
            </div>
        </div>
    );
}
