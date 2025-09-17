"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import FAQ from "../global/FAQ";
import Link from "next/link";
import webImg from "@/../public/assets/karriere/web.svg";

const slides = [
    {
        icon: "/assets/karriere/icon-1.svg",
        title: "Homeoffice",
        desc: "Ob Büro oder Home Office, Sie arbeiten dort, wo Sie sich am wohlsten fühlen.",
    },
    {
        icon: "/assets/karriere/icon-2.svg",
        title: "Eigenverantwortung",
        desc: "Sie gestalten Ihren Arbeitstag selbst, Verantwortung bedeutet Freiheit.",
    },
    {
        icon: "/assets/karriere/icon-3.svg",
        title: "Gleitzeit",
        desc: "Mit Gleitzeit arbeiten Sie flexibel, für mehr Produktivität und Lebensqualität.",
    },
];

const faqContent = (
    <div className='pt-4 flex flex-col gap-4 text-white1'>
        <div className='flex items-center gap-2 lg:text-sm text-xs'>
            {["Vollzeit", "ab sofort", "ab 3.000€ (brutto)"].map((txt, i) => (
                <div
                    key={i}
                    className='px-3 py-3 whitespace-nowrap text-white1 h-7 lg:h-[31px] border border-gray1/25 rounded-full flex items-center justify-center '
                >
                    {txt}
                </div>
            ))}
        </div>

        <div className=''>
            <h3 className='text-base leading-normal '>Wir schätzen</h3>
            <p className='text-base mt-1.5 text-gray1'>
                Wir kreieren einzigartige Markenidentitäten, die Ihre Werte und
                Vision widerspiegeln. Mit durchdachtem Design und strategischem
                Ansatz stärken wir Ihre Markenpräsenz.
            </p>
        </div>

        <div className=''>
            <h3 className='text-base leading-normal '>Was wir bieten</h3>
            <p className='text-base mt-1.5 text-gray1'>
                Wir kreieren einzigartige Markenidentitäten, die Ihre Werte und
                Vision widerspiegeln. Mit durchdachtem Design und strategischem
                Ansatz stärken wir Ihre Markenpräsenz.
            </p>
        </div>

        <p className='text-base mt-2 text-gray1'>
            Bewerbung an:{" "}
            <Link
                href={"karriere@64bytes.de"}
                className='underline underline-offset-3'
            >
                karriere@64bytes.de
            </Link>
        </p>
    </div>
);

const faqItems = [
    {
        title: <>Projektmanager</>,
        content: faqContent,
    },
    {
        title: <>initiativ bewerben</>,
        content: faqContent,
    },
];

export default function KarrierePage() {
    const [current, setCurrent] = useState(0);
    const totalSlides = slides.length;
    const progressPercent = ((current + 1) / totalSlides) * 100;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden relative'>
            <div className='max-w-[1180px] mx-auto flex flex-col gap-20 md:gap-24 lg:gap-26 xl:gap-30 relative z-1'>
                <div className=''>
                    <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                        Werden Sie <span className='text-cyan1'>Teil</span>
                        <br />
                        unseres <span className='text-cyan1'>Teams</span>
                    </h1>

                    <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 1.6,
                            ease: "easeInOut",
                        }}
                        className='text-gray1 leading-normal text-base max-w-[580px] mt-3.5'
                    >
                        <span className='sm:inline hidden'>
                            {" "}
                            Dies ist ein Typoblindtext. An ihm kann man sehen,
                            ob alle Buchstaben da sind und wie sie aussehen.
                            Manchmal benutzt man Worte wie Hamburgefonts,
                            Rafgenduks oder Handgloves, um Schriften zu testen.{" "}
                        </span>

                        <span className='sm:hidden'>
                            Ob spannende Idee oder wertvolle Skills fürs Team –
                            wir freuen uns auf Sie! Bringen Sie Ihre
                            Erfahrungen, Kreativität und Motivation ein und
                            gestalten Sie mit uns gemeinsam Projekte, die
                            Wirkung zeigen. Bei uns zählt jede Stimme, jede
                            Initiative und jede Leidenschaft. Werden Sie Teil
                            eines Teams, das zusammenhält, voneinander lernt und
                            Erfolge feiert.
                        </span>
                    </motion.p>
                </div>
                {/* small devices */}
                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className='lg:hidden'
                >
                    <div className='flex gap-8 md:gap-5 flex-col md:flex-row md:items-center'>
                        <h1 className='font-robotoMono text-[28px] lg:text-[40px] leading-[120%] tracking-[1px] uppercase lg:min-w-[480px] md:min-w-[300px]'>
                            Mehr <span className='text-violet1'>Benefits</span>.{" "}
                            <br />
                            Mehr{" "}
                            <span className='text-violet1'>
                                Möglichkeiten
                            </span>{" "}
                            <br />
                            für Sie.
                        </h1>

                        <div className='grid grid-cols-1 grid-rows-1 items-center'>
                            {slides.map((cur, i) => (
                                <div
                                    className={`flex flex-col sm:flex-row gap-6 md:p-10 p-6 rounded-sm backdrop-blur-[2px] border border-[#212730] row-start-1 col-start-1 
                                    transition-opacity duration-300 
                                    ${
                                        i === current
                                            ? "ease-out"
                                            : "opacity-0 pointer-events-none ease-in"
                                    }
                                    `}
                                    key={i}
                                >
                                    <Image
                                        src={cur.icon}
                                        width={90}
                                        height={90}
                                        alt=''
                                        className='size-[48px] md:size-[90px] '
                                    />
                                    <div className=''>
                                        <h3 className='lg:text-2xl text-lg leading-[28px] lg:leading-[34px] tracking-[1px] uppercase font-robotoMono '>
                                            {cur.title}
                                        </h3>
                                        <p className='text-gray1 leading-normal text-base mt-1.5'>
                                            {cur.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex items-center gap-8 mt-8 relative z-1'>
                        <div className='bg-[#212730] h-[2px] flex-1 rounded-2xl relative overflow-hidden'>
                            <motion.div
                                className='absolute top-0 bottom-0 left-0 bg-violet1'
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
                </motion.div>
                {/* large devices */}
                <motion.div
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className='lg:block hidden'
                >
                    <div className='flex gap-8 md:gap-5 flex-col md:flex-row md:items-center'>
                        <h1 className='font-robotoMono text-[28px] lg:text-[40px] leading-[120%] tracking-[1px] uppercase lg:min-w-[480px] md:min-w-[300px]'>
                            Mehr <span className='text-violet1'>Benefits</span>.{" "}
                            <br />
                            Mehr{" "}
                            <span className='text-violet1'>
                                Möglichkeiten
                            </span>{" "}
                            <br />
                            für Sie.
                        </h1>

                        <div className='grid grid-cols-1 grid-rows-1 items-center'>
                            {slides.map((cur, i) => (
                                <div
                                    className={`flex flex-col sm:flex-row gap-6 md:p-10 p-6 rounded-sm backdrop-blur-[2px] border border-[#212730] row-start-1 col-start-1 
                                    transition-opacity duration-300 
                                    ${
                                        i === current
                                            ? "ease-out"
                                            : "opacity-0 pointer-events-none ease-in"
                                    }
                                    `}
                                    key={i}
                                >
                                    <Image
                                        src={cur.icon}
                                        width={90}
                                        height={90}
                                        alt=''
                                        className='size-[48px] md:size-[90px] '
                                    />
                                    <div className=''>
                                        <h3 className='lg:text-2xl text-lg leading-[28px] lg:leading-[34px] tracking-[1px] uppercase font-robotoMono '>
                                            {cur.title}
                                        </h3>
                                        <p className='text-gray1 leading-normal text-base mt-1.5'>
                                            {cur.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex items-center gap-8 mt-8 relative z-1'>
                        <div className='bg-[#212730] h-[2px] flex-1 rounded-2xl relative overflow-hidden'>
                            <motion.div
                                className='absolute top-0 bottom-0 left-0 bg-violet1'
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
                </motion.div>

                <motion.div
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className='flex md:flex-row flex-col xl:gap-5 sm:gap-20 gap-8'
                >
                    <div className='lg:min-w-[480px]'>
                        <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                            Werden Sie <span className='text-cyan1'>Teil</span>
                            <br />
                            unseres <span className='text-cyan1'>Teams</span>
                        </h1>
                        <p className='text-gray1 leading-normal text-base max-w-[580px] mt-3.5'>
                            <span className="hidden lg:inline">&nbsp;</span>Ob spannende Idee oder wertvolle Skills{" "}
                            <br className='md:block hidden ' />
                            fürs Team – wir freuen uns auf Sie.
                        </p>
                    </div>

                    <div className='flex-1 hidden sm:block'>
                        <FAQ items={faqItems} />
                    </div>

                    <div className='flex-1 sm:hidden'>
                        <FAQ items={faqItems} showNumber={false} />
                    </div>
                </motion.div>
            </div>

            <div className='absolute inset-0 flex justify-center mx-auto max-w-[1440px]'>
                {/* more larger devices */}
                <motion.div
                    initial={{ rotate: 30, y: -20, right:'auto' }}
                    animate={{ rotate: 0, y: -40, right:'-24%' }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                    className='hidden 2xl:inline absolute'
                >
                    <Image className='w-[800px] ' src={webImg} alt='' priority />
                </motion.div>
                
                {/* large devices */}
                
                <motion.div
                    initial={{ rotate: 30, y: -20, x: '0vw' }}
                    animate={{ rotate: 0, y: -40, x: '44.5vw' }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                    className='hidden md:inline 2xl:hidden absolute'
                >
                    <Image className='w-[800px] ' src={webImg} alt='' priority />
                </motion.div>

                {/* small devices */}
                <motion.div
                    initial={{ rotate: 30, y: 100, x: "0%" }}
                    animate={{ rotate: 3.5, y: 435, x: "49%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className='md:hidden absolute '
                >
                    <Image className='w-[406px] max-w-none' src={webImg} alt=''  priority/>
                </motion.div>
            </div>
        </section>
    );
}
