import React from 'react';
import { siteData } from '../data/mockData';

export default function About() {
    const { quote, description } = siteData.about;

    return (
        <section className="py-24 border-y border-primary/30 mb-32 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <h2 className="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight italic font-display">
                    "{quote}"
                </h2>
            </div>
            <div className="md:w-1/2">
                <p className="text-slate-700 text-lg font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}
