import React from 'react';
import { siteData } from '../data/mockData';

export default function Services() {
  return (
    <section id="servicios" className="mb-32 scroll-mt-32">
      <div className="mb-12">
        <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Nuestros Servicios</h3>
      </div>
      <div className="flex flex-col">
        {siteData.services.map((service, index) => (
          <div
            key={service.id}
            className={`grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-8 border-t ${index === siteData.services.length - 1 ? 'border-b' : ''} border-gold py-10 items-start`}
          >
            <p className="text-gold text-2xl font-light leading-none mb-4 md:mb-0 font-display">
              {service.id}
            </p>
            <div>
              <h4 className="text-slate-900 text-3xl font-bold mb-4 font-display">
                {service.title}
              </h4>
              <p className="text-slate-700 text-lg font-light leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
