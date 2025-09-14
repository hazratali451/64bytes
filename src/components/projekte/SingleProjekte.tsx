import Image from "next/image";
import React from "react";
import Button from "../global/Button";

const commonContent = (
    <div className=''>
        <h2 className='mb-4 font-robotoMono text-lg lg:text-2xl leading-[28px] lg:leading-[34px] tracking-[1px] uppercase '>
            Zwischenüberschrift
        </h2>
        <p className='text-base leading-normal text-gray1'>
            Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle
            Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte
            wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu
            testen. Manchmal Sätze, die alle Buchstaben des Alphabets enthalten
            - man nennt diese Sätze »Pangrams«. Sehr bekannt ist dieser: The
            quick brown fox jumps over the lazy old dog.
        </p>
    </div>
);

export default function SingleProjekte({ slug = "Kineo Medical" }) {
    const title = decodeURIComponent(slug);
    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20'>
            <div className='max-w-[1180px] mx-auto '>
                <div className='flex items-center whitespace-nowrap flex-wrap gap-2 sm:gap-3 sm:mb-6 mb-4'>
                    {["Startup Platform", "B2C", "UX UI Design", "SaaS"].map(
                        (cur, i) => (
                            <div
                                key={i}
                                className='h-[35px] inline-flex justify-center items-center px-3 relative bg-[linear-gradient(180deg,#D946FF33_0%,#18FFFF33_100%)] overflow-hidden rounded-full'
                            >
                                <div className='absolute inset-[1px] rounded-full bg-black1'></div>
                                <div className='relative lg:text-lg md:text-sm text-xs leading-normal '>
                                    {cur}
                                </div>
                            </div>
                        )
                    )}
                </div>
                <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                    {title}
                </h1>

                <Image
                    className='md:my-16 my-8 rounded-sm w-full lg:h-[712px] object-cover object-center'
                    src='/assets/projekte/singleBig.png'
                    width={1180}
                    height={712}
                    alt=''
                    priority
                />

                <div className='flex lg:gap-30 items-center flex-col lg:flex-row'>
                    <div className=''>
                        {commonContent}
                        <Image
                            src='/assets/projekte/singleLeft.png'
                            className='rounded-sm lg:my-10 my-[32px_16px] w-full object-cover object-center '
                            alt=''
                            width={580}
                            height={342}
                        />
                        <div className='lg:block hidden'>{commonContent}</div>
                    </div>

                    <div className='flex flex-col md:gap-8 gap-4'>
                        <Image
                            src='/assets/projekte/mobileTop.png'
                            className='rounded-sm object-cover object-center lg:min-w-[480px] md:h-[400px] h-[308px]'
                            alt=''
                            width={480}
                            height={400}
                        />

                        <Image
                            src='/assets/projekte/mobileBottom.png'
                            className=' rounded-sm object-cover object-center lg:min-w-[480px] md:h-[400px] h-[308px]'
                            alt=''
                            width={480}
                            height={400}
                        />

                        <div className='lg:hidden mt-4'>{commonContent}</div>
                    </div>
                </div>

                <div className='flex gap-8 lg:gap-30 items-center flex-col lg:flex-row lg:mt-16 md:mt-10 mt-8'>
                    <Image
                        src='/assets/projekte/singleLeft.png'
                        className='rounded-sm w-full max-w-[580px] object-cover object-center '
                        alt=''
                        width={580}
                        height={342}
                    />

                    {commonContent}
                </div>

                <div className='flex flex-col items-start sm:items-center lg:mt-30 mt-20'>
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
