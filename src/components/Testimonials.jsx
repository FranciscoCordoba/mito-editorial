import React from 'react';
import { IconStarFilled } from '@tabler/icons-react';
import { testimonialsData } from '../data/mockData';

export function Testimonials() {
    return (
        <section id="testimonios" className="scroll-mt-10 bg-background-light py-24 px-6 animate-fade-in">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
                        {testimonialsData.title}
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                        {testimonialsData.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 animate-slide-up flex flex-col"
                            style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                        >
                            <div className="flex gap-1 mb-6 text-[#D95D39]">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <IconStarFilled key={i} className="w-5 h-5" />
                                ))}
                            </div>

                            <p className="text-neutral-600 mb-8 leading-relaxed grow">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.authorImage}
                                    alt={testimonial.authorName}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-neutral-900 text-sm">
                                        {testimonial.authorName}
                                    </h4>
                                    <p className="text-neutral-500 text-sm italic">
                                        {testimonial.bookTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
