import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import prochef from "@/assets/vendors/prochef.png";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Founder of 'The Cookie Lab'",
        quote: "It changed my university experience.",
        story:
            "I started selling my homemade cookies from my dorm kitchen. Within three months of joining Feasto, I had to rent a commercial space to keep up with the demand. The automated payouts made it so easy to reinvest in my business.",
        stat: "200%",
        statLabel: "Sales Growth in 90 Days",
        image: prochef,
    },
    {
        name: "Sarah Chen",
        role: "Owner of 'Bao House'",
        quote: "Feasto gave us a whole new customer base.",
        story:
            "We were a small dim-sum place struggling to get noticed. After partnering with Feasto, our orders tripled on campus. The dashboard analytics helped us figure out exactly which items students loved most.",
        stat: "3x",
        statLabel: "Order Volume Increase",
        image: prochef,
    },
    {
        name: "James Okafor",
        role: "Founder of 'Spice Route'",
        quote: "The support team is incredible.",
        story:
            "From day one, the onboarding was seamless. They helped us optimize our menu for the student market, and the 24-hour payout cycle means I never worry about cash flow. Best decision we ever made.",
        stat: "150%",
        statLabel: "Revenue Growth in 60 Days",
        image: prochef,
    },
];

export function SuccessStory() {
    return (
        <section className="relative px-4 py-20 md:px-8 lg:px-20 bg-[#FFF9F5] overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#EE8C2B]/20 bg-[#EE8C2B]/5 text-[#EE8C2B] font-black uppercase tracking-widest text-[9px] md:text-[10px]">
                            Success Stories
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-neutral-900 leading-tight">
                            Shared by our <span className="text-[#EE8C2B]">Partners</span>
                        </h2>
                    </div>
                </div>

                {/* Carousel */}
                <Carousel opts={{ loop: true }} className="w-full relative">
                    <CarouselContent>
                        {testimonials.map((t, index) => (
                            <CarouselItem key={index}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 rounded-[2.5rem] md:rounded-[4rem] bg-white p-4 md:p-8 lg:p-12 shadow-2xl shadow-black/[0.03] border border-neutral-100 overflow-hidden">
                                    {/* Left — Image */}
                                    <div className="relative group">
                                        <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-neutral-50 relative">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        </div>

                                        {/* Stats Badge */}
                                        <div className="absolute -bottom-4 right-4 md:right-8 w-48 md:w-56 items-center gap-3 rounded-2xl border border-[#EE8C2B]/10 bg-white p-4 md:p-5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                            <div className="text-3xl md:text-4xl font-black text-[#EE8C2B] tracking-tighter">
                                                {t.stat}
                                            </div>
                                            <div className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight text-neutral-400 mt-1">
                                                {t.statLabel}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right — Content */}
                                    <div className="flex flex-col gap-6 md:gap-8 p-4 md:p-6 lg:p-0">
                                        <div className="h-12 w-12 md:h-16 md:w-16 rounded-2xl md:rounded-[1.5rem] bg-[#FDF3EA] text-[#EE8C2B] flex items-center justify-center">
                                            <Quote className="h-6 w-6 md:h-8 md:w-8 fill-[#EE8C2B]" />
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl md:text-4xl font-black leading-tight tracking-tight text-neutral-900">
                                                "{t.quote}"
                                            </h3>
                                            <p className="text-base md:text-lg leading-relaxed text-neutral-500 font-medium italic">
                                                {t.story}
                                            </p>
                                        </div>

                                        <div className="pt-4 md:pt-6 border-t border-neutral-50">
                                            <p className="text-lg md:text-xl font-black text-neutral-900">
                                                {t.name}
                                            </p>
                                            <p className="text-sm md:text-base font-black text-[#EE8C2B] uppercase tracking-widest mt-1">
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Compact Navigation Controls */}
                    <div className="flex items-center justify-center gap-4 mt-10 lg:absolute lg:top-[-80px] lg:right-4">
                        <CarouselPrevious className="static translate-y-0 h-12 w-12 md:h-14 md:w-14 rounded-2xl border-2 border-neutral-100 bg-white text-neutral-900 shadow-xl hover:bg-neutral-50 hover:border-[#EE8C2B]/20 transition-all active:scale-95" />
                        <CarouselNext className="static translate-y-0 h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-neutral-900 text-white shadow-xl hover:bg-black transition-all active:scale-95" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
