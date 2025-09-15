"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../global/Button";
import webImg from "@/../public/assets/about/web.svg";


const aboutCards = [
    {
        image: "/assets/about/pic1.png",
        tag: "64 Bytes",
        title: "Was uns antreibt",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/about/pic2.png",
        tag: "Nader Kaake",
        title: "Co-Founder",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
    {
        image: "/assets/about/pic3.png",
        tag: "Avijit Singh",
        title: "Co-Founder",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    },
];

export default function AboutPage() {
    const [active, setActive] = useState(0);

    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden relative'>
            <motion.div
                initial={{ rotate: 90 }}
                animate={{ rotate: 135 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className=' hidden md:inline absolute -right-[100px] top-[400px] '
            >
                <Image className='w-[476px] ' src={webImg} alt='' />
            </motion.div>

            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 45 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className='hidden md:inline absolute right-[534px] top-[196px]'
            >
                <Image className='w-[476px] ' src={webImg} alt='' />
            </motion.div>

            <motion.div
                initial={{ rotate: 75 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className='md:hidden absolute -right-[195px] top-[410px] '
            >
                <Image className='w-[333px] ' src={webImg} alt='' />
            </motion.div>

            <motion.div
                initial={{ rotate: 15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className='md:hidden absolute right-[34px] top-[147px]'
            >
                <Image className='w-[333px] ' src={webImg} alt='' />
            </motion.div>

            <div className='relative z-1 max-w-[1180px] mx-auto flex flex-col gap-20 md:gap-24 lg:gap-26 xl:gap-30'>
                <div className=''>
                    <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                        Wer wir sind? <br />
                        <span className='text-cyan1'>Entwickler</span> mit
                        Vision!
                    </h1>

                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1.6, ease: "easeInOut" }}
                        className='md:grid xl:grid-cols-3 grid-cols-2 mt-16 gap-5 hidden'
                    >
                        {aboutCards.map((card, i) => (
                            <div
                                key={i}
                                className='p-10 bg-white1/4 rounded-sm backdrop-blur-[2px]'
                            >
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={300}
                                    height={200}
                                    className='w-full'
                                />

                                <div className='mt-6 flex flex-col gap-4 items-start'>
                                    <div className='h-8.5 border border-white1/25 rounded-full inline-flex justify-center items-center py-1 px-3'>
                                        {card.tag}
                                    </div>

                                    <h3 className='font-robotoMono text-lg leading-[28px] md:text-2xl md:leading-[34px] tracking-[1px] uppercase'>
                                        {card.title}
                                    </h3>

                                    <p className='text-gray1 leading-normal text-base max-w-[280px]'>
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 1.5,
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className='md:hidden max-w-[400px] mx-auto sm:mt-20'
                    >
                        <div className='flex gap-0.5 items-center my-6 '>
                            {aboutCards.map(({ tag }, i) => (
                                <React.Fragment key={i}>
                                    <div
                                        className={`h-8.5 border rounded-full inline-flex justify-center items-center py-1 px-3 whitespace-nowrap text-sm font-medium w-full 
                                    transition-all duration-300 ease-in-out
                                    ${
                                        active === i
                                            ? "border-white1/50"
                                            : "text-white1/50 border-white1/25"
                                    }`}
                                        onClick={() => setActive(i)}
                                    >
                                        {tag}
                                    </div>

                                    {i !== aboutCards.length - 1 && (
                                        <div className='min-w-[7.5px] rounded-full h-[1px] bg-gray1/25 '></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className='grid grid-cols-1 grid-row-1 gap-5 '>
                            {aboutCards.map((card, i) => (
                                <div
                                    key={i}
                                    className={`p-5 bg-white1/4 rounded-sm backdrop-blur-[2px] col-start-1 row-start-1 
                                transition-all duration-300 
                                ${
                                    i === active
                                        ? "ease-in"
                                        : "opacity-0 pointer-events-none ease-out"
                                }`}
                                >
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={300}
                                        height={200}
                                        className='w-full'
                                    />

                                    <div className='mt-4 flex flex-col gap-2 items-start'>
                                        <h3 className='font-robotoMono text-lg leading-[28px] md:text-2xl md:leading-[34px] tracking-[1px] uppercase'>
                                            {card.title}
                                        </h3>

                                        <p className='text-gray1 leading-normal text-base xl:max-w-[280px] 2xl:max-w-none'>
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                    className='flex flex-col items-start sm:items-center'
                >
                    <div className='flex items-center gap-4 w-full'>
                        <div className=' h-[1px] bg-gray1 opacity-25 sm:flex-1 min-w-3'></div>
                        <h2 className='text-sm leading-[24px] text-gray1 '>
                            Join the Game
                        </h2>
                        <div className='h-[1px] bg-gray1 opacity-25 flex-1'></div>
                    </div>

                    <h3 className='sm:text-center mt-8 mb-6 font-robotoMono text-lg lg:text-2xl leading-[28px] lg:leading-[34px] tracking-[1px] uppercase '>
                        Unsere Kultur spricht Sie an?{" "}
                        <br className='xl:block hidden ' />
                        Dann <span className='text-violet1'>
                            werden
                        </span> Sie <span className='text-violet1'>Teil</span>{" "}
                        unseres <span className='text-violet1'>Teams</span>.
                    </h3>

                    <Button variant='violet'>Jobs entdecken</Button>
                </motion.div>
            </div>
        </section>
    );
}
