import React, { useState } from 'react';
import { siteData } from '../data/mockData';

export default function Portfolio() {
    const [showAll, setShowAll] = useState(false);

    const displayedPortfolio = showAll ? siteData.portfolio : siteData.portfolio.slice(0, 3);

    return (
        <section id="catalogo" className="mb-32 flex flex-col items-center">
            <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-12 self-start">Selección de Obras</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full">
                {displayedPortfolio.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-3/4 bg-cover rounded-md mb-4 hover-bw shadow-lg transition-all hover:shadow-xl"
                            style={{ backgroundImage: `url("${item.image}")` }}
                            aria-label={item.title}
                        />
                        <p className="text-slate-900  text-lg font-bold font-display leading-tight">{item.title}</p>
                        <p className="text-slate-600  text-sm font-light mt-1">{item.category}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => setShowAll(!showAll)}
                className="mt-14 flex min-w-[124px] cursor-pointer items-center justify-center rounded-md h-12 px-8 border-2 border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary/5 transition-colors"
            >
                {showAll ? "Ver Menos" : "Ver todo el catálogo"}
            </button>
        </section>
    );
}
