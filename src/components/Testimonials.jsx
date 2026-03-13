import React from 'react';
import { siteData } from '../data/mockData';
import { IconStarFilled } from '@tabler/icons-react';

export default function Testimonials() {
    return (
        <section className="mb-32 bg-background-light py-24 px-4 md:px-12 w-full flex flex-col items-center justify-center">
            <h1 className='text-md font-bold text-center mb-12 text-primary uppercase'>Lo que dicen nuestros autores</h1>
            <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-stretch gap-6">
                {siteData.testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex-1 flex flex-col items-start bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-left transition-transform hover:-translate-y-1 hover:shadow-md"
                    >
                        <div className="flex text-[#DD5E36] gap-1 mb-6">
                            {[...Array(testimonial.stars)].map((_, i) => (
                                <IconStarFilled key={i} size={20} className="text-[#DD5E36]" />
                            ))}
                        </div>

                        <p className="text-slate-500 font-sans text-[15px] leading-[1.8] mb-10 grow">
                            "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                className="w-12 h-12 rounded-full object-cover"
                                loading="lazy"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-slate-800 text-sm font-sans block">{testimonial.author}</span>
                                <span className="text-slate-400 italic text-[13px] font-sans mt-0.5">{testimonial.book}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
