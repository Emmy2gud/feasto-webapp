import { Percent, Users, Wallet } from "lucide-react"

const features = [
    {
        title: "Active Student Users",
        stats: "10,000+",
        description: "Instant access to a massive, hungry audience within a 5-mile radius of campus hubs.",
        icon: Users
    },
    {
        title: "Commission Rates",
        stats: "Low 8%",
        description: "Keep more of your hard-earned revenue with our industry-leading flat-fee structure.",
        icon: Percent
    },
    {
        title: "Automated Payouts",
        stats: "24h",
        description: "No more waiting for weeks. Get your funds deposited directly into your account daily.",
        icon: Wallet
    }
]

export function WhyPartner() {
    return (
        <section className="relative px-4 py-20 md:px-8 lg:px-20 bg-[#0a0f1d] overflow-hidden">
            {/* Decorative mesh gradient background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EE8C2B]/5 blur-[120px] rounded-full -z-0"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/5 blur-[100px] rounded-full -z-0"></div>

            <div className="mx-auto max-w-[1280px] relative z-10">
                {/* Section Heading */}
                <div className="mb-12 md:mb-16 text-center space-y-4">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#EE8C2B] font-black uppercase tracking-widest text-[9px] md:text-[10px]">
                        The Feasto Advantage
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                        Why Partner with <span className="text-[#EE8C2B]">Feasto</span>?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-neutral-400 font-medium italic">
                        Everything you need to grow your food business on campus with a technology-first approach.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-5 rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EE8C2B]/10 border border-[#EE8C2B]/20 group-hover:scale-110 transition-transform duration-500">
                                <feature.icon className="h-7 w-7 text-[#EE8C2B]" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-4xl font-black text-[#EE8C2B] tracking-tighter">
                                    {feature.stats}
                                </span>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">{feature.title}</h3>
                            </div>
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400 font-medium italic">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
