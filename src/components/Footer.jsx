import React from 'react';
import { IconBook, IconBrandFacebook, IconBrandInstagram, IconMail, IconPhone, IconClock, IconHeart } from '@tabler/icons-react';
import { footerData } from '../data/mockData';

const iconMap = {
    call: IconPhone,
    mail: IconMail,
    schedule: IconClock,
    facebook: IconBrandFacebook,
    instagram: IconBrandInstagram,
};

export function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-neutral-300 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-evenly gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-3 text-white mb-6">
                            <IconBook className="text-primary w-8 h-8" stroke={1.5} />
                            <h2 className="text-2xl font-serif font-bold">Mito Editorial</h2>
                        </div>
                        <p className="text-neutral-400 max-w-sm mb-8 leading-relaxed">
                            {footerData.about}
                        </p>
                        <div className="flex gap-4">
                            {footerData.socials && footerData.socials.map((social, idx) => {
                                const SocialIcon = iconMap[social.icon];
                                return (
                                    <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors text-white" aria-label={social.name}>
                                        {SocialIcon && <SocialIcon className="w-5 h-5" stroke={1.5} />}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h3>
                        <ul className="space-y-4">
                            {footerData.contact.map((item, idx) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <li key={idx} className="flex items-start gap-3 select-none">
                                        {IconComponent && <IconComponent className="text-primary w-5 h-5 mt-0.5" stroke={1.5} />}
                                        <div>
                                            <p className="text-sm font-semibold text-white">{item.type}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-neutral-400 hover:text-white transition-colors">{item.value}</a>
                                            ) : (
                                                <p className="text-neutral-400">{item.value}</p>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-500 text-sm">{footerData.copyrightText}</p>
                    <p className="text-neutral-500 text-sm">Desarrollado por <a href="https://portfolio-fcordoba.pages.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Francisco Cordoba</a></p>
                    <p className="text-neutral-500 text-sm flex items-center gap-1">
                        Diseñado con <IconHeart className="text-primary w-4 h-4" stroke={1.5} fill="currentColor" /> para autores
                    </p>
                </div>
            </div>
        </footer>
    );
}
