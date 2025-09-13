"use client";

import Image from "next/image";
import React from "react";
import Button from "../global/Button";
import { motion } from "motion/react";

import bg from "@/../public/assets/projekte/web_bg.svg";
import Link from "next/link";

const services = [
    { image: "/assets/service/showtime/1.jpg", title: "Kineo Medical" },
    { image: "/assets/service/showtime/2.jpg", title: "Hi Green!" },
    { image: "/assets/service/showtime/3.jpg", title: "Calmaroi" },
    { image: "/assets/service/showtime/4.jpg", title: "Fidelius" },
    { image: "/assets/service/showtime/5.jpg", title: "Cannadoc24" },
];

export default function ProjektePage() {
    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden relative'>
            {/* background rotation */}
            <motion.div
                initial={{ rotate: -30 }}
                animate={{ rotate: 15 }}
                transition={{ duration: 1.6, ease: "easeIn" }}
                className='absolute -top-[126px] left-[326px] size-[1718px] max-w-none'
            >
                <Image src={bg} alt='' />
            </motion.div>

            <div className='max-w-[1180px] mx-auto relative z-1'>
                <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                    Funktionierender <br /> Code für{" "}
                    <span className='text-cyan1'>digitale Projekte</span>
                </h1>

                {/* grid slide up */}
                <motion.div
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 1.6,
                        delay: 0.2,
                        ease: "easeInOut",
                    }}
                    className='mt-8 md:mt-15 grid lg:grid-cols-2 gap-5'
                >
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className='xl:p-10 md:p-4 p-3 flex xl:gap-10 gap-4 items-center bg-white1/4 rounded-sm backdrop-blur-[2px]'
                        >
                            <Image
                                src={s.image}
                                width={235}
                                height={312.5}
                                alt={s.title}
                                priority
                                className='rounded-[3px] object-cover object-center xl:min-w-[240px] lg:min-w-[200px] md:min-w-[300px] sm:min-w-[250px] min-w-[127px] sm:h-[312px] h-[168px] overflow-hidden '
                            />

                            <div className='min-w-0'>
                                <h3 className='font-robotoMono sm:text-2xl text-lg sm:leading-[34px] leading-[28px] tracking-[1px] uppercase'>
                                    {s.title}
                                </h3>
                                <p className='sm:text-base text-sm leading-normal text-gray1 sm:mt-4 sm:mb-6 mt-1 mb-3'>
                                    Dies ist ein Typoblindtext. An ihm kann man
                                    sehen, ob alle Buchstaben da sind und wie
                                    sie aussehen.
                                </p>
                                <Link href={`/projekte/${s.title}`}>
                                    <Button
                                        className='w-full'
                                        variant='fade-cyan'
                                    >
                                        Mehr erfahren
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
