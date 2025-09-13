import Image from "next/image";
import React from "react";
import { GrayBall } from "../global/icons";

const data = [
    {
        heading: "Web-Entwicklung",
    },
    {
        heading: "Individualsoftware",
    },
    {
        heading: "Prozess-Digitalisierung",
    },
    {
        heading: "E-Commerce",
    },
];

export default function WirBewegen() {
    return (
        <section className='md:pb-30 md:pt-28 pt-18 pb-20 relative mobile-slide-up--delay-2s'>
            <div className='relative z-1'>
                <div className='flex flex-col items-center gap-12'>
                    <div className='flex items-center gap-4'>
                        <div className='min-w-[33px] h-[1px] bg-gray1 opacity-25 w-[33px]'></div>
                        <h2 className='text-sm leading-[24px] text-gray1 '>
                            Wir bewegen
                        </h2>
                        <div className='min-w-[33px] h-[1px] bg-gray1 opacity-25 w-[33px]'></div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-y-12 justify-items-center md:gap-y-10 max-w-[780px] w-full'>
                        {data.map((cur, i) => (
                            <React.Fragment key={i}>
                                <div className='text-center'>
                                    <h3 className='font-robotoMono text-lg leading-[28px] md:text-2xl md:leading-[34px] tracking-[1px] uppercase '>
                                        {cur.heading}
                                    </h3>
                                    <p className='md:mt-3 mt-4 text-base leading-normal text-gray1'>
                                        Develop a strong, recognizable <br />{" "}
                                        fashion brand identity.
                                    </p>
                                </div>

                                {i < data.length - 1 && (
                                    <div className='w-10 md:hidden h-[1px] bg-gray1/25'></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className='absolute inset-0 overflow-hidden'>
                <GrayBall
                    className='md:size-[400px] size-[223px] absolute md:top-2.5 top-[200px] -right-[130px] md:-right-[180px] md:[fill-opacity:0.4]'
                    pclassName='md:[fill-opacity:0.4]'
                />
            </div>

            <Image
                className='md:size-[400px] size-[223px] absolute -left-10 md:-left-[140px] md:-bottom-[190px] bottom-[210px]'
                src='/assets/service/violetBall.svg'
                alt=''
                width={400}
                height={400}
            />
        </section>
    );
}
