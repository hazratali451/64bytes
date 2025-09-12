import React from "react";
import FAQ from "../global/FAQ";
import Image from "next/image";

const txt =
    "Wir kreieren einzigartige Markenidentitäten, die Ihre Werte und Vision widerspiegeln. Mit durchdachtem Design und strategischem Ansatz stärken wir Ihre Markenpräsenz.";
const faqItems = [
    { title: "Kostenlose Erstberatung" },
    { title: "Analyse und Strategie-Entwicklung" },
    { title: "Implementierung und Umsetzung" },
    { title: "Bewertung und Anpassung" },
];
export default function FaqSection() {
    return (
        <section className='pt-28 pb-30 overflow-hidden'>
            <div className='max-w-[980px] mx-auto relative'>
                <div className='flex gap-30 relative z-1'>
                    <div className='min-w-0'>
                        <h2 className='text-[40px] leading-[120%] tracking-[1px] uppercase font-robotoMono'>
                            Ihr&nbsp;
                            <span className='text-violet1'>Erfolg</span>
                            &nbsp;ist unsere&nbsp;
                            <span className='text-violet1'>Mission</span>
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

                    <div className='min-w-[480px]'>
                        <FAQ items={faqItems} defaultText={txt} />
                    </div>
                </div>

                <Image
                    className='absolute -left-[40px] -top-[110px]'
                    src='/assets/service/violetBall.svg'
                    alt=''
                    width={400}
                    height={400}
                />

                <Image
                    className='absolute -right-[192px] top-10'
                    src='/assets/service/violetBall.svg'
                    alt=''
                    width={400}
                    height={400}
                />
            </div>
        </section>
    );
}
