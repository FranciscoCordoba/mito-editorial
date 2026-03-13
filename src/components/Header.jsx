import React from 'react';
import { siteData } from '../data/mockData';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-4 md:px-10 py-5 sticky top-0 bg-background-light/90  backdrop-blur-md z-50">


      <div className="flex items-center gap-4">
        <h2 style={{ fontFamily: 'var(--font-sans)' }} className="text-primary text-lg sm:text-xl md:text-2xl font-black leading-tight uppercase flex items-center gap-2">
          <img src="/icono Mito.png" alt="Mito Logo" className="w-8 h-8 object-contain" />
          {siteData.header.logo}
        </h2>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <div className="items-center gap-4 lg:gap-9 hidden lg:flex">
          {siteData.header.nav.slice(0, 5).map((item, idx) => (
            <a key={idx} className="text-slate-900  text-sm font-medium leading-normal hover:text-primary transition-colors" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/5492664700688?text=Hola%20equipo%20de%20Mito!%20Vengo%20desde%20su%20web%20y%20quiero%20hacer%20una%20consulta." target="_blank" rel="noreferrer"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-2 md:px-6 bg-primary text-white text-sm font-bold leading-normal tracking-wide uppercase hover:bg-primary-hover transition-colors"
        >
          <span className="truncate">{siteData.header.cta}</span>
        </a>
      </div>
    </header>
  );
}
