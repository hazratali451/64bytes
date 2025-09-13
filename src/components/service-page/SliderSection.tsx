"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import spiderNetImg from "@/../public/assets/service/spiderNet3.svg";

import icon1 from "@/../public/assets/service/slider/1.svg";
import icon2 from "@/../public/assets/service/slider/2.svg";
import icon3 from "@/../public/assets/service/slider/3.svg";
import icon4 from "@/../public/assets/service/slider/4.svg";
import icon5 from "@/../public/assets/service/slider/5.svg";
import icon6 from "@/../public/assets/service/slider/6.svg";
import icon7 from "@/../public/assets/service/slider/7.svg";
import icon8 from "@/../public/assets/service/slider/8.svg";

const slides = [
    {
        title: (
            <>
                Strategie <br /> und Beratung
            </>
        ),
        text: "In der digitalen Welt zählt eine klare Strategie. Wir entwickeln Lösungen, die Ihre Vision verwirklichen und nachhaltig Erfolg bringen.",
        icon: icon1,
    },
    {
        title: (
            <>
                Entwicklung von <br />
                Webseiten und Apps
            </>
        ),
        text: "Wir entwickeln funktionale, benutzerfreundliche Webseiten und Applikationen für eine starke Online-Präsenz.",
        icon: icon2,
    },
    {
        title: (
            <>
                E-Commerce <br />
                Plattformen
            </>
        ),
        text: "Nahtlose, skalierbare und kundenorientierte E-Commerce-Plattformen – von Shop-Software bis zur Benutzererfahrung.",
        icon: icon3,
    },
    {
        title: (
            <>
                Prozessdigitalisierung <br />
                und Automatisierung
            </>
        ),
        text: "Prozessdigitalisierung steigert Effizienz und Wettbewerbsfähigkeit, senkt Kosten, minimiert Fehler und erleichtert Zusammenarbeit.",
        icon: icon4,
    },
    {
        title: (
            <>
                Administration von <br />
                Systemen und Prozessen
            </>
        ),
        text: "Effiziente IT-Administration sorgt für sichere, stets aktuelle und zuverlässige Systeme sowie einen reibungslosen Betrieb.",
        icon: icon5,
    },
    {
        title: (
            <>
                Branding, Identity <br />
                und Design
            </>
        ),
        text: "Wir gestalten Markenidentitäten, die Werte sichtbar machen und durch strategisches Design, Präsenz und Nutzererlebnis stärken.",
        icon: icon6,
    },
    {
        title: (
            <>
                SEO und <br />
                Performance
            </>
        ),
        text: "In der digitalen Welt zählt Sichtbarkeit – mit gezieltem SEO sorgen wir für Top-Rankings und deutlich mehr Besucher auf Ihrer Website.",
        icon: icon7,
    },
    {
        title: (
            <>
                Social Media <br />
                Marketing
            </>
        ),
        text: "Soziale Medien stärken Ihre Marke, verbinden Sie mit der Zielgruppe und fördern Wachstum durch Inhalte, Kampagnen und Analysen.",
        icon: icon8,
    },
];

export default function SliderSection() {
    const [current, setCurrent] = useState(0);
    const totalSlides = slides.length;
    const progressPercent = ((current + 1) / totalSlides) * 100;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

    return (
        <section className='px-5'>
            <div className='max-w-0 max-h-0 absolute -z-999 pointer-events-none opacity-0'>
                {slides.map((cur, i) => (
                    <Image src={cur.icon} key={i} alt='' loading="eager"/>
                ))}
            </div>
            <div className='max-w-[780px] mx-auto relative'>
                <Image
                    className='absolute lg:-left-[370px] lg:bottom-9 lg:top-auto -top-5 w-[330px] lg:w-auto'
                    src={spiderNetImg}
                    alt=''
                />

                <div className='flex lg:flex-row flex-col gap-8 lg:items-end relative z-1'>
                    <h2 className='text-white1 font-robotoMono leading-[120%] text-[28px] lg:text-[40px] uppercase tracking-[1px] '>
                        Alles aus <br /> einer Hand
                    </h2>

                    <div className='relative'>
                        {/* added `relative` so the absolute children can overlap without changing layout */}
                        <div className='border border-[#212730] rounded-sm  flex flex-col gap-6 lg:min-w-[480px] lg:max-w-[480px] relative  lg:h-[300px] min-h-[285px] justify-center items-center backdrop-blur-[2px]'>
                            <AnimatePresence>
                                <motion.div
                                    key={current}
                                    // opacity-only crossfade (no translate Y) so incoming & outgoing can overlap smoothly
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                    // absolute so it overlaps previous slide during exit
                                    className='absolute inset-0 flex flex-col gap-6 lg:p-10 p-6'
                                >
                                    {/* {icon} */}

                                    <Image
                                        src={slides[current].icon}
                                        alt={""}
                                        loading='eager'
                                    />

                                    <div className=''>
                                        <h3 className='lg:text-2xl text-lg leading-[28px] lg:leading-[34px] tracking-[1px] uppercase font-robotoMono '>
                                            {slides[current].title}
                                        </h3>
                                        <p className='text-gray1 leading-normal text-base mt-2'>
                                            {slides[current].text}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* keep an invisible (but height-preserving) placeholder for correct initial height on first render */}
                            <div
                                aria-hidden='true'
                                className='invisible flex flex-col gap-6 lg:p-10 p-6'
                            >
                                <Image
                                    src={slides[current].icon}
                                    alt={""}
                                    loading='eager'
                                />

                                <div className='min-w-0'>
                                    <h3 className='lg:text-2xl text-lg leading-[28px] lg:leading-[34px] tracking-[1px] uppercase font-robotoMono '>
                                        {slides[current].title}
                                    </h3>
                                    <p className='text-gray1 leading-normal text-base mt-2'>
                                        {slides[current].text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-8 mt-8 relative z-1'>
                    <div className='bg-[#212730] h-[2px] flex-1 rounded-2xl relative overflow-hidden'>
                        <motion.div
                            className='absolute top-0 bottom-0 left-0 bg-cyan1'
                            style={{ width: `${progressPercent}%` }}
                            initial={false}
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                    </div>

                    <div className='select-none flex gap-4 items-center font-robotoMono leading-normal tracking-[1px] text-base '>
                        {/* previous btn */}
                        <svg
                            onClick={prevSlide}
                            xmlns='http://www.w3.org/2000/svg'
                            width='10'
                            height='20'
                            viewBox='0 0 10 20'
                            fill='none'
                            className='cursor-pointer'
                        >
                            <path
                                d='M9 0.999999L1 10L9 19'
                                stroke='#F4F2ED'
                                strokeLinecap='round'
                            />
                        </svg>

                        <div className='flex items-center gap-2'>
                            {String(current + 1).padStart(2, "0")}
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='14'
                                height='30'
                                viewBox='0 0 14 30'
                                fill='none'
                            >
                                <path
                                    d='M1 1L13 29'
                                    stroke='#F4F2ED'
                                    strokeLinecap='round'
                                />
                            </svg>
                            {String(totalSlides).padStart(2, "0")}
                        </div>

                        {/* next button */}
                        <svg
                            onClick={nextSlide}
                            xmlns='http://www.w3.org/2000/svg'
                            width='10'
                            height='20'
                            viewBox='0 0 10 20'
                            fill='none'
                            className='cursor-pointer'
                        >
                            <path
                                d='M0.999999 19L9 10L1 1'
                                stroke='#F4F2ED'
                                strokeLinecap='round'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
