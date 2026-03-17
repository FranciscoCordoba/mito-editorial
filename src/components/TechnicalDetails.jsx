import React from 'react';
import { siteData } from '../data/mockData';

export default function TechnicalDetails() {
    return (
        <section id="formatos" className="mb-32">
            <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-12 text-center">Detalles Técnicos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {siteData.technical.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-md"
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
                ))}
            </div>
        </section>
    );
}
