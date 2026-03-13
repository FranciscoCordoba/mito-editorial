import React from 'react';
import { siteData } from '../data/mockData';
import { IconBook, IconBrandWhatsapp, IconMail, IconClock, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

export default function Footer() {
  const { contact } = siteData.footer;

  return (
    <footer className="bg-[#1C1C1C] text-slate-400 py-16 px-32 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">

        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src="/Logo Mito Editor Nj.png" alt="Mito Logo" className="w-8 h-8 object-contain" />
            <h2 className="text-white text-2xl font-display font-bold">Mito Editorial</h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
            Dedicados a transformar grandes ideas en libros excepcionales. Editorial independiente comprometida con la calidad y la visión de cada autor.
          </p>
          <div className="flex gap-4 mt-2">
            <a href={siteData.footer.socials[0].href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-amber-50/10 flex items-center justify-center hover:bg-primary text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
              <IconBrandFacebook size={20} />
            </a>
            <a href={siteData.footer.socials[1].href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-amber-50/10 flex items-center justify-center hover:bg-primary text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
              <IconBrandInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:pl-16">
          <h3 className="text-white text-lg font-bold uppercase tracking-wider">Contacto</h3>

          <a href="https://wa.me/5492664700688?text=Hola%20Mito%20Editorial!%20Me%20contacto%20desde%20su%20p%C3%A1gina%20web." target="_blank" rel="noreferrer" className="flex items-start gap-4 group cursor-pointer">
            <IconBrandWhatsapp className="text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" size={20} />
            <div>
              <span className="text-white font-bold text-md block group-hover:text-primary transition-colors">WhatsApp</span>
              <span className="text-md group-hover:text-white transition-colors">{contact.tel}</span>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <IconMail className="text-primary shrink-0 mt-0.5" size={20} />
            <div>
              <span className="text-white font-bold text-md block">Email</span>
              <span className="text-md">{contact.email}</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconClock className="text-primary shrink-0 mt-0.5" size={20} />
            <div>
              <span className="text-white font-bold text-md block">Horario</span>
              <span className="text-md">{contact.schedule}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="max-w-[1200px] mx-auto border-t border-slate-700/50 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span>{siteData.footer.copyright}</span>
          <span>Desarrollado por <a href={siteData.footer.devLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Francisco Cordoba</a></span>
          <span>{siteData.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
