import React from "react";
import FAQ from "../global/FAQ";
import Image from "next/image";
import spiderNetImg from "@/../public/assets/service/spiderNet3.svg";

const txt =
    "Wir kreieren einzigartige Markenidentitäten, die Ihre Werte und Vision widerspiegeln. Mit durchdachtem Design und strategischem Ansatz stärken wir Ihre Markenpräsenz.";
const faqItems = [
    {
        title: (
            <>
                Kostenlose <br className='block sm:hidden' />
                Erstberatung
            </>
        ),
    },
    {
        title: (
            <>
                Analyse und <br className='block sm:hidden' />
                Strategie-Entwicklung
            </>
        ),
    },
    {
        title: (
            <>
                Implementierung <br className='block sm:hidden' />
                und Umsetzung
            </>
        ),
    },
    {
        title: (
            <>
                Bewertung <br className='block sm:hidden' />
                und Anpassung
            </>
        ),
    },
];
export default function FaqSection() {
    return (
        <section className='md:pb-30 md:pt-28 pt-18 pb-20 relative px-5'>
            <div className='max-w-[980px] mx-auto '>
                <div className='flex flex-col lg:flex-row xl:gap-30 gap-8 relative z-1'>
                    <div className='min-w-0 max-w-[540px] lg:max-w-none'>
                        <h2 className='sm:text-[40px] max-w-[355px] lg:max-w-none text-[28px] leading-[120%] tracking-[1px] uppercase font-robotoMono'>
                            Ihr <span className='text-violet1'>Erfolg</span> ist
                            unsere <span className='text-violet1'>Mission</span>
                        </h2>

                        <p className='text-base text-gray1 mt-4 leading-normal'>
                            Unser Team entwickelt innovative und
                            maßgeschneiderte digitale Lösungen für Unternehmen
                            aller Art. Mit Kreativität und Technik schaffen wir
                            individuelle technische Lösungen, die Sie und ihr
                            Unternehmen hervorheben und Ihre Besucher
                            beeindrucken.
                        </p>
                    </div>

                    <div className='lg:min-w-[480px]'>
                        <FAQ items={faqItems} defaultContent={txt} />
                    </div>
                </div>
            </div>

            <div className='absolute inset-0 overflow-hidden md:pb-30 md:pt-28 pt-18 pb-20 '>
                <div className='max-w-[980px] relative mx-auto'>
                    <Image
                        className='absolute -left-[40px] -top-[110px] md:inline hidden'
                        src='/assets/service/violetBall.svg'
                        alt=''
                        width={400}
                        height={400}
                    />

                    <Image
                        className='absolute -right-[192px] top-10 md:inline hidden'
                        src='/assets/service/violetBall.svg'
                        alt=''
                        width={400}
                        height={400}
                    />
                </div>
            </div>

            <div className='absolute inset-0 md:pb-30 md:pt-28 pt-18 pb-20 '>
                <div className='max-w-[780px] relative mx-auto '>
                    <Image
                        className='absolute 
                        lg:-left-[370px] sm:left-[20%] left-5 
                        lg:top-[306px] sm:top-[700px] top-[780px] 
                        w-[330px] lg:w-auto'
                        src={spiderNetImg}
                        alt=''
                    />
                    
                </div>
            </div>
        </section>
    );
}
