import React from 'react';
import { IconTruck } from '@tabler/icons-react';
import { pricingData } from '../data/mockData';

export function Pricing() {
    return (
        <section id="precios" className="scroll-mt-10 relative py-24 px-6 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <IconTruck className="mx-auto text-primary w-14 h-14 mb-6" stroke={1.5} />
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                    {pricingData.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    {pricingData.description}
                </p>
                <button className="inline-flex items-center justify-center rounded-lg h-14 px-10 bg-primary text-white text-lg font-bold shadow-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                    <span>{pricingData.ctaText}</span>
                </button>
            </div>
        </section>
    );
}
