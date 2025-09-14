"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Button from "../global/Button";
import { GrayBall } from "../global/icons";

const steps = [
    {
        image: "/assets/insight/pic1.png",
        title: "Wähle deinen\npassenden Plan",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind.",
    },
    {
        image: "/assets/insight/pic2.png",
        title: "Starte Sie\nIHr Projekte",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind.",
    },
    {
        image: "/assets/insight/pic3.png",
        title: "Erhalten\nSie Ergebnisse",
        desc: "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind.",
    },
];

const techs = [
    { image: "/assets/insight/tech1.svg", label: "Python" },
    { image: "/assets/insight/tech2.svg", label: "Next.js" },
    { image: "/assets/insight/tech3.svg", label: "Typescript" },
    { image: "/assets/insight/tech4.svg", label: "Docker" },
];

export default function Insights() {
    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden'>
            <div className='max-w-[1180px] mx-auto flex flex-col gap-20 md:gap-24 lg:gap-26 xl:gap-30'>
                <div className=''>
                    <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                        Blick <span className='text-cyan1'>hinter</span>{" "}
                        <br className='sm:hidden' /> den{" "}
                        <span className='text-cyan1'>Kulissen</span>
                    </h1>

                    <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='text-gray1 leading-normal text-base max-w-[580px] mt-3.5'
                    >
                        Dies ist ein Typoblindtext. An ihm kann man sehen, ob
                        alle Buchstaben da sind und wie sie aussehen. Manchmal
                        benutzt man Worte wie Hamburgefonts, Rafgenduks oder
                        Handgloves, um Schriften zu testen.{" "}
                    </motion.p>
                </div>

                <motion.div className=''>
                    <h2 className=' font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                        Unser <br className='sm:hidden' />
                        <span className='text-violet1'>Workflow</span>
                    </h2>

                    <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='text-gray1 leading-normal text-base mt-3.5'
                    >
                        Dies ist ein Typoblindtext. An ihm kann man sehen, ob
                        alle Buchstaben da sind.
                    </motion.p>

                    <div className='mt-10 flex items-stretch justify-between md:flex-row flex-col gap-10'>
                        {steps.map((step, i) => (
                            <React.Fragment key={i}>
                                <div className='max-w-[480px]'>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 180 }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                        }}
                                        className='overflow-hidden sm:hidden'
                                    >
                                        <Image
                                            className='size-[136px] border border-black1 saturate-65 max-w-none'
                                            src={step.image}
                                            width={136}
                                            height={136}
                                            alt=''
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 180 }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                        }}
                                        className='overflow-hidden sm:block hidden'
                                    >
                                        <Image
                                            className='size-[180px] border border-black1 saturate-65 max-w-none'
                                            src={step.image}
                                            width={180}
                                            height={180}
                                            alt=''
                                        />
                                    </motion.div>

                                    <h3 className='mb-2 mt-6 font-robotoMono text-lg leading-[28px] md:text-2xl md:leading-[34px] tracking-[1px] uppercase'>
                                        {step.title
                                            .split("\n")
                                            .map((line, idx) => (
                                                <React.Fragment key={idx}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                    </h3>

                                    <p className='text-gray1 leading-normal text-base max-w-[280px]'>
                                        {step.desc}
                                    </p>
                                </div>

                                {i !== steps.length - 1 && (
                                    <motion.div
                                        initial={{ y: "110%" }}
                                        animate={{ y: "0%" }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                        }}
                                        className='md:w-[1px] w-full md:h-auto h-[1px] bg-gray1/25 self-stretch max-w-[380px]'
                                    ></motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                <div className=''>
                    <div className='relative z-1'>
                        <h2 className=' font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                            Die <span className='text-cyan1'>Tools</span> hinter{" "}
                            <br />
                            unseren{" "}
                            <span className='text-cyan1'>Projekten</span>
                        </h2>
                        <p className='text-gray1 leading-normal text-base max-w-[580px] mt-3.5'>
                            Dies ist ein Typoblindtext. An ihm kann man sehen,
                            ob alle Buchstaben da sind.
                        </p>
                    </div>

                    <div className='mt-8 grid md:grid-cols-4 grid-cols-2 lg:gap-5 gap-3 relative'>
                        {techs.map((tech, i) => (
                            <div
                                key={i}
                                className='p-[12.5] rounded-sm bg-white/2 flex justify-center items-center flex-col relative z-1'
                            >
                                <Image
                                    src={tech.image}
                                    alt={tech.label}
                                    width={53}
                                    height={53}
                                />
                                <p className='text-gray1 leading-normal text-base mt-0.5'>
                                    {tech.label}
                                </p>
                            </div>
                        ))}

                        <GrayBall className='size-[223px] absolute -right-[51px] -top-[50px] opacity-90 md:hidden' />

                        <Image
                            className='size-[223px] absolute -left-[59px] -bottom-4 md:hidden'
                            src='/assets/service/violetBall.svg'
                            alt=''
                            width={400}
                            height={400}
                        />
                    </div>
                </div>

                <div className='flex flex-col items-start sm:items-center'>
                    <div className='flex items-center gap-4 w-full'>
                        <div className=' h-[1px] bg-gray1 opacity-25 sm:flex-1 min-w-3'></div>
                        <h2 className='text-sm leading-[24px] text-gray1 '>
                            Join the Game
                        </h2>
                        <div className='h-[1px] bg-gray1 opacity-25 flex-1'></div>
                    </div>

                    <h3 className='sm:text-center mt-8 mb-6 font-robotoMono text-lg lg:text-2xl leading-[28px] lg:leading-[34px] tracking-[1px] uppercase '>
                        <span className='text-violet1'>Überzeugt?</span> <br />{" "}
                        Dann lassen Sie uns <br /> über{" "}
                        <span className='text-violet1'>Ihr Projekt</span>{" "}
                        sprechen.
                    </h3>

                    <Button variant='violet'>Kostenlose Erstberatung </Button>
                </div>
            </div>
        </section>
    );
}
