import { Wallet, Clock, Users, Gift } from "lucide-react"

const features = [
    {
        title: "Instant Payouts",
        description: "Cash out your earnings daily. No more waiting two weeks for a paycheck.",
        icon: Wallet
    },
    {
        title: "Work Between Classes",
        description: "Turn that 1-hour gap between lectures into a productive earning session.",
        icon: Clock
    },
    {
        title: "Student-Only",
        description: "Connect with other student runners. Join a safe, student-focused community.",
        icon: Users
    },
    {
        title: "Referral Bonuses",
        description: "Invite your roommates and friends. Earn extra when they complete their first run.",
        icon: Gift
    }
]

export function Perks() {
    return (
        <section className="relative px-6 py-20 lg:px-20 ">
            <div className="mx-auto max-w-[1280px]">
                {/* Section Heading */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-black lg:text-5xl">
                        Perks of the Squad
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-[hsl(var(--slate-500))]">
                        We’ve designed the delivery experience around your academic schedule, not the other
                        way around.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-4 rounded-3xl bg-[#F8F7F6] p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                <feature.icon className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                            <p className="text-base leading-relaxed text-[hsl(var(--slate-500))]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
