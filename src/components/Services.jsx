import React from 'react';
import { IconEdit, IconPalette, IconBarcode, IconStack2 } from '@tabler/icons-react';
import { servicesData } from '../data/mockData';

const iconMap = {
    edit: IconEdit,
    palette: IconPalette,
    barcode_scanner: IconBarcode,
    layers: IconStack2,
};

export function Services() {
    return (
        <section id="servicios" className="scroll-mt-10 bg-neutral-50 dark:bg-neutral-900 py-20 px-6 animate-fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                        {servicesData.title}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        {servicesData.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.services.map((service, idx) => {
                        const IconComponent = iconMap[service.icon];
                        return (
                            <div
                                key={idx}
                                className="bg-background-light dark:bg-background-dark border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group animate-slide-up"
                                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {IconComponent && <IconComponent className="w-8 h-8" stroke={1.5} />}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
