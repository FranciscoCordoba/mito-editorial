import React from 'react';
import { IconBook, IconMenu2 } from '@tabler/icons-react';
import { navigationLinks } from '../data/mockData';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <nav className="sticky top-0 z-50 glassmorphism border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3 text-neutral-900 dark:text-neutral-100">
                    <IconBook className="text-primary w-8 h-8" />
                    <h2 className="text-xl font-serif font-bold tracking-tight">Mito Editorial</h2>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {navigationLinks.map((link, idx) => (
                        <a key={idx} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>
                <button className="hidden md:flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
                    <span>Cotizá tu libro</span>
                </button>
                <button
                    className="md:hidden text-neutral-900 dark:text-neutral-100"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <IconMenu2 className="w-8 h-8" stroke={1.5} />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-4 animate-slide-up">
                    {navigationLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button className="flex w-full items-center justify-center rounded-lg h-12 mt-2 bg-primary text-white text-base font-bold shadow-sm hover:bg-primary/90 transition-colors">
                        <span>Cotizá tu libro</span>
                    </button>
                </div>
            )}
        </nav>
    );
}
