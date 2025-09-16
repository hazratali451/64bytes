import React from "react";

const features = [
    {
        title: "Nur das Beste",
        desc: "Wir verwenden Ihre Daten nur, um Ihr Erlebnis und die Dienstleistungen zu optimieren.",
    },
    {
        title: "Gesichert",
        desc: "Wir schützen und sichern Ihre Daten.",
    },
    {
        title: "Klartext",
        desc: "Wir sprechen Ihre Sprache und sind immer offen – kein Nonsens, keine Überraschungen.",
    },
];

export default function DatenschutzPage() {
    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden relative'>
            <div className='max-w-[1180px] mx-auto flex lg:flex-row flex-col gap-8 sm:gap-16 md:gap-24 lg:gap-26 xl:gap-30 relative z-1 '>
                <div className='max-w-[280px] xl:flex-1'>
                    <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                        Datenschutz
                    </h1>
                </div>

                <div className='flex-1 flex flex-col gap-8'>
                    {features.map((item, i) => (
                        <div key={i}>
                            <h3 className='font-robotoMono text-lg leading-[28px] md:text-2xl md:leading-[34px] tracking-[1px] uppercase'>
                                <span className="text-cyan1">{String(i + 1).padStart(2, "0")}</span>{" "}
                                {item.title}
                            </h3>
                            <p className='mt-2 text-base leading-normal text-gray1'>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
