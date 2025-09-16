import React from "react";
import FAQ from "../global/FAQ";
const txt = (
    <p className="text-gray1 lg:text-[17px]">
        Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da
        sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts,
        Rafgenduks oder Handgloves, um Schriften zu testen. Manchmal Sätze, die
        alle Buchstaben des Alphabets enthalten - man nennt diese Sätze
        »Pangrams«. Sehr bekannt ist dieser: The quick brown fox jumps over the
        lazy old dog.
    </p>
);
const faqItems = [
    {
        title: "Title",
    },
    {
        title: "Title",
    },
    {
        title: "Title",
    },
    {
        title: "Title",
    },
    {
        title: "Title",
    },
    {
        title: "Title",
    },
    {
        title: "Title",
    },
];
export default function AgbPage() {
    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden relative'>
            <div className='max-w-[1180px] mx-auto flex lg:flex-row flex-col gap-8 sm:gap-16 md:gap-24 lg:gap-26 xl:gap-30 relative z-1 '>
                <div className='max-w-[280px] xl:flex-1'>
                    <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                        Allgemeine{" "}
                        <span className='text-cyan1'>
                            Geschäfts-bedingungen
                        </span>
                    </h1>
                </div>

                <div className='flex-1 flex flex-col gap-8'>
                    <FAQ
                        items={faqItems}
                        defaultContent={txt}
                        showNumber={false}
                    />
                </div>
            </div>
            <div className='max-w-[1180px] mx-auto sm:mt-30 mt-20'>
                <div className='flex flex-col items-start sm:items-center'>
                    <div className='flex items-center gap-4 w-full'>
                        <div className=' h-[1px] bg-gray1 opacity-25 sm:flex-1 min-w-3'></div>
                        <h2 className='text-sm leading-[24px] text-gray1 '>
                            Download & Check!
                        </h2>
                        <div className='h-[1px] bg-gray1 opacity-25 flex-1'></div>
                    </div>

                    <h3 className='sm:text-center mt-8 mb-6 font-robotoMono text-lg lg:text-2xl leading-[28px] lg:leading-[34px] tracking-[1px] uppercase '>
                        <span className='text-violet1'>Laden</span> Sie die
                        aktuellen <span className='text-violet1'>AGBs</span>{" "}
                        <br />
                        hier bequem{" "}
                        <span className='text-violet1'>herunter</span>
                    </h3>

                    <button
                        className='py-2 md:px-6 px-4 xl:text-lg md:text-base text-sm font-medium leading-[24px] xl:leading-[28px] text-center rounded-[48px] backdrop-blur-[2px] transition-all duration-400 ease-out inline-flex gap-2 items-center
                     shadow-[inset_0_0_0_1px_#F4F2ED] hover:bg-white1 text-white1 hover:text-black1'
                    >
                        <div className=''>Hier downloaden </div>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='21'
                            height='20'
                            viewBox='0 0 21 20'
                            fill='none'
                        >
                            <path
                                d='M7.5 15.5002H13.5C15.6213 15.5002 16.6819 15.5002 17.341 14.8411C18 14.1822 18 13.1215 18 11.0002V10.2502C18 8.12885 18 7.0682 17.341 6.40918C16.7647 5.83288 15.8812 5.76055 14.25 5.75146M6.75 5.75146C5.11873 5.76055 4.23529 5.83288 3.65901 6.40917C3 7.0682 3 8.12885 3 10.2502V11.0002C3 13.1215 3 14.1822 3.65901 14.8411C3.88386 15.066 4.15546 15.2141 4.5 15.3118'
                                stroke='currentColor'
                                strokeLinecap='round'
                            />
                            <path
                                d='M10.5 0.5V10.25M10.5 10.25L8.25 7.625M10.5 10.25L12.75 7.625'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>

                    {/* <Button variant='violet'>Kostenlose Erstberatung </Button> */}
                </div>
            </div>
        </section>
    );
}
