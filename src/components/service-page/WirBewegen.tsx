import Image from "next/image";
import React from "react";

const data = [
    {
        heading: "Web-Entwicklung",
        // text: <>Develop a strong, recognizable fashion brand identity.</>,
    },
    {
        heading: "Individualsoftware",
        // text: <>Develop a strong, recognizable fashion brand identity.</>,
    },
    {
        heading: "Prozess-Digitalisierung",
        // text: <>Develop a strong, recognizable fashion brand identity.</>,
    },
    {
        heading: "E-Commerce",
        // text: <>Develop a strong, recognizable fashion brand identity.</>,
    },
];

export default function WirBewegen() {
    return (
        <section className='pb-30 pt-28 relative '>
            <div className='relative z-1'>
                <div className='flex flex-col items-center gap-12'>
                    <div className='flex items-center gap-4'>
                        <div className='min-w-[33px] h-[1px] bg-gray1 opacity-25 w-[33px]'></div>
                        <h2 className='text-sm leading-[24px] text-gray1 '>
                            Wir bewegen
                        </h2>
                        <div className='min-w-[33px] h-[1px] bg-gray1 opacity-25 w-[33px]'></div>
                    </div>

                    <div className='grid grid-cols-2 gap-y-10 max-w-[780px] w-full'>
                        {data.map((cur, i) => (
                            <div className='text-center' key={i}>
                                <h3 className='font-robotoMono text-2xl leading-[34px] tracking-[1px] uppercase '>
                                    {cur.heading}
                                </h3>
                                <p className='mt-3 text-base leading-normal text-gray1'>
                                    Develop a strong, recognizable <br />{" "}
                                    fashion brand identity.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='absolute inset-0 overflow-hidden'>
                <Image
                    className='absolute top-2.5 -right-[180px]'
                    src='/assets/service/grayBall.svg'
                    alt=''
                    width={400}
                    height={400}
                />
            </div>

            <Image
                className='absolute -left-[140px] -bottom-[190px]'
                src='/assets/service/violetBall.svg'
                alt=''
                width={400}
                height={400}
            />
        </section>
    );
}
