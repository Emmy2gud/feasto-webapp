import { Quote } from "lucide-react";
import prochef from "@/assets/vendors/prochef.png";
import { useState } from "react";
const testimonials = [
    {
        name: "Marcus Chen",
        role: "3rd Year Mechanical Engineering",
        story:
            '"I was worried about balancing my engineering degree with a job. With Runner Squad, I only deliver between my afternoon labs. It\'s paid for all my textbooks and coffee this semester without stressing me out."',
        image: prochef,
    },
    {
        name: "Aisha Patel",
        role: "2nd Year Business Administration",
        story:
            '"The flexibility is unreal. I do deliveries between my morning and evening classes and earn enough to cover my rent. Plus, the student community is so supportive."',
        image: prochef,
    },
    {
        name: "Jordan Williams",
        role: "4th Year Computer Science",
        story:
            '"I started delivering with Feasto last semester and it honestly changed everything. The instant payouts mean I never have to stress about cash flow between financial aid drops."',
        image: prochef,
    },
];

export function SuccessStory() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () =>
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );

    const t = testimonials[current];

    return (
        <section className="relative px-6 py-20 lg:px-20">
            <div className="mx-auto max-w-[1280px]">
                <div className="relative overflow-hidden rounded-3xl bg-[#111827]">
                    {/* Decorative circle */}
                    <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#1E293B] opacity-60" />
                    <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#1E293B] opacity-40" />

                    <div className="relative grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-[280px_1fr] md:p-12 lg:p-16">
                        {/* Left — Image */}
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="h-[260px] w-full object-cover md:h-[300px]"
                            />
                        </div>

                        {/* Right — Content */}
                        <div className="flex flex-col gap-5">
                            {/* Quote Icon */}
                            <Quote className="h-10 w-10 fill-primary text-primary" />

                            {/* Testimonial */}
                            <p className="text-lg font-medium leading-relaxed text-gray-300 lg:text-xl">
                                {t.story}
                            </p>

                            {/* Author */}
                            <div>
                                <p className="text-base font-bold text-white">{t.name}</p>
                                <p className="text-sm text-primary">{t.role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex items-center justify-center gap-3 pb-8">
                        <button
                            onClick={prev}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition hover:border-primary hover:text-primary"
                            aria-label="Previous testimonial"
                        >
                            ‹
                        </button>
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2.5 w-2.5 rounded-full transition-all ${i === current
                                        ? "w-6 bg-primary"
                                        : "bg-gray-600 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                        <button
                            onClick={next}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition hover:border-primary hover:text-primary"
                            aria-label="Next testimonial"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

