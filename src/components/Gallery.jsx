import React from 'react';
import { galleryData } from '../data/mockData';

export function Gallery() {
    return (
        <section id="galeria" className="scroll-mt-10 py-20 px-6 max-w-7xl mx-auto animate-fade-in">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    {galleryData.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                    {galleryData.subtitle}
                </p>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {galleryData.items.map((item, idx) => (
                    <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden relative group animate-slide-up" style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}>
                        <img
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                            src={item.imageUrl}
                            alt={item.imageAlt}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-serif text-lg">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
