import React from 'react';
import { siteData } from '../data/mockData';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Whatsapp from './icons/Whatsapp';
import Mail from './icons/Mail';
import Clock from './icons/Clock';
import MercadoPago from './icons/MercadoPago';
import Paypal from './icons/Paypal';
import Cash from './icons/Cash';
import CreditCard from './icons/CreditCard';

export default function Footer() {
  const { contact } = siteData.footer;

  return (
    <footer className="bg-[#1C1C1C] text-slate-400 py-16 px-6 md:px-12 lg:px-32 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">

        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center ms-4 w-min md:w-full gap-4">
            <img src="/Logo Mito Editor Nj.webp" alt="Mito Logo" className="w-8 h-8 object-contain" />
            <h2 className="text-white text-2xl font-display font-bold ">Mito Editorial</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-slate-400 max-w-sm text-md leading-relaxed">
              Dedicados a transformar tu expresión literaria, tus palabras, en libros excepcionales.
            </p>
            <p className="text-slate-400 max-w-sm text-md leading-relaxed">
              Editorial independiente comprometida con la calidad y con el anhelo de cada autor.
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <a href={siteData.footer.socials[0].href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-amber-50/10 flex items-center justify-center hover:bg-primary text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="text-white" />
            </a>
            <a href={siteData.footer.socials[1].href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-amber-50/10 flex items-center justify-center hover:bg-primary text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="text-white" />
            </a>
          </div>


        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:pl-16">
          <h3 className="text-white text-lg font-bold uppercase tracking-wider">Contacto</h3>

          <a href="https://wa.me/5492664700688?text=Hola%20Mito%20Editorial!%20Me%20contacto%20desde%20su%20p%C3%A1gina%20web." target="_blank" rel="noreferrer" className="flex items-start gap-4 group cursor-pointer">
            <Whatsapp size={24} className="text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" />
            <div>
              <span className="text-white font-bold text-md block group-hover:text-primary transition-colors">WhatsApp</span>
              <span className="text-md group-hover:text-white transition-colors select-none">{contact.tel}</span>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <Mail className="text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold text-md block">Email</span>
              <span className="text-md">{contact.email}</span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold text-md block">Horario</span>
              <span className="text-md">{contact.schedule}</span>
            </div>
          </div>

          {/* Medios de Pago */}
          <div className="flex flex-col gap-3 mt-8">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest opacity-70">Formas y medios de pago</h4>
            <div className="flex gap-4 items-center">
              <div className="group relative flex flex-col items-center">
                <MercadoPago size={36} className="text-slate-400 group-hover:text-[#00B1EA] transition-colors cursor-help" />
                <span className="absolute -top-10 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all pointer-events-none whitespace-nowrap shadow-xl border border-slate-700 z-50">
                  Mercado Pago
                </span>
              </div>
              <div className="group relative flex flex-col items-center">
                <Paypal size={28} className="text-slate-400 group-hover:text-[#003087] transition-colors cursor-help" />
                <span className="absolute -top-10 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all pointer-events-none whitespace-nowrap shadow-xl border border-slate-700 z-50">
                  PayPal
                </span>
              </div>
              <div className="group relative flex flex-col items-center">
                <Cash size={28} className="text-slate-400 group-hover:text-green-500 transition-colors cursor-help" />
                <span className="absolute -top-10 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all pointer-events-none whitespace-nowrap shadow-xl border border-slate-700 z-50">
                  Efectivo
                </span>
              </div>
              <div className="group relative flex flex-col items-center">
                <CreditCard size={28} className="text-slate-400 group-hover:text-amber-500 transition-colors cursor-help" />
                <span className="absolute -top-10 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all pointer-events-none whitespace-nowrap shadow-xl border border-slate-700 z-50">
                  Transferencias bancarias
                </span>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Bottom Legal Section */}
      <div className="max-w-[1200px] mx-auto border-t border-slate-700/50 pt-8 mt-8">
        <div className="text-center lg:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span>{siteData.footer.copyright}</span>
          <span>Desarrollado por <a href={siteData.footer.devLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Francisco Cordoba</a></span>
          <span>{siteData.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
