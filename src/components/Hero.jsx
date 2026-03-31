import React from 'react';
import { siteData } from '../data/mockData';
import Whatsapp from './icons/Whatsapp';
import Reveal from './Reveal';

export default function Hero() {
    const { headline, subheadline, cta, image } = siteData.hero;

    return (
        <section id="inicio" className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-4 lg:py-8">
            <div className="w-full">
                <div
                    className="flex min-h-[480px] md:min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-2xl items-start justify-end px-6 pb-12 md:px-12 md:pb-16 relative overflow-hidden shadow-lg"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url("${image}")` }}
                >
                    <div className="flex flex-col gap-4 text-left max-w-2xl relative z-10">
                        <Reveal animation="reveal-left" delay={200}>
                            <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.02em] drop-shadow-md">
                                {headline}
                            </h1>
                        </Reveal>
                        <Reveal animation="reveal-left" delay={400}>
                            <h2 className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                                {subheadline}
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal animation="reveal" delay={600}>
                        <a href="https://wa.me/5492664700688?text=Hola%20Mito%20Editorial!%20Me%20interesa%20iniciar%20la%20edición%20de%20mi%20libro." target="_blank" rel="noreferrer" className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md h-12 md:h-14 px-8 bg-primary hover:bg-primary-hover transition-transform hover:-translate-y-0.5 text-white text-base md:text-lg font-bold leading-normal tracking-[0.015em] shadow-xl relative z-10 mt-4">
                            <Whatsapp className="text-white" />
                            <span className="truncate">{cta}</span>
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
