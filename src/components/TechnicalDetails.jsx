import React from 'react';
import { siteData } from '../data/mockData';
import Reveal from './Reveal';

export default function TechnicalDetails() {
    return (
        <section id="formatos" className="mb-32 scroll-mt-32">
            <Reveal animation="reveal">
                <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-12 text-center">Detalles Técnicos</h3>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {siteData.technical.map((item, index) => (
                    <Reveal key={index} animation="reveal-scale" delay={index * 100}>
                        <div className="flex flex-col gap-4">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-md shadow-sm hover:shadow-md transition-shadow duration-500"
                                style={{ backgroundImage: `url("${item.image}")` }}
                                aria-label={item.title}
                            />
                            <div>
                                <p className="text-slate-900 text-xl font-bold leading-normal mb-1 font-display">
                                    {item.title}
                                </p>
                                <p className="text-slate-600 text-base font-light leading-normal">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
