import React from 'react';
import { siteData } from '../data/mockData';

export default function FinalCTA() {
    const { title } = siteData.footer;

    return (
        <section className="bg-primary py-32 px-6 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight font-display">
                    {title}
                </h2>
                <a
                    href="https://wa.me/5492664700688?text=Hola%20equipo%20de%20Mito.%20Quiero%20pedir%20un%20presupuesto."
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-14 px-10 bg-white text-primary text-lg font-bold leading-normal tracking-wider uppercase hover:bg-background-light transition-colors"
                >
                    <span className="truncate">Pedir presupuesto</span>
                </a>
            </div>
        </section>
    );
}
