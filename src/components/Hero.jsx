import React from 'react';
import { heroData } from '../data/mockData';

export function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 flex flex-col gap-6 md:gap-8 text-center md:text-left animate-slide-up">
                    <div className="flex flex-col gap-3">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                            {heroData.badge}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-tight text-neutral-900">
                            {heroData.title}
                        </h1>
                        <p className="text-neutral-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                            {heroData.description}
                        </p>
                        <ImgHero visibility="block md:hidden mb-6" />
                    </div>
                    <div>
                        <button className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                            <span>{heroData.ctaText}</span>
                        </button>
                    </div>
                </div>
                <ImgHero visibility="hidden md:block" />
            </div>
        </section>
    );

    function ImgHero({ visibility }) {
        return (
            <div className={`${visibility} relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl`}>
                <div className="absolute inset-0 bg-neutral-200 animate-pulse"></div>
                <img
                    className="inset-0 w-full h-full object-cover relative z-10"
                    src={heroData.imageUrl}
                    alt={heroData.imageAlt}
                />
            </div>
        );
    }

}
