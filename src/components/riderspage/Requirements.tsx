import { CreditCard, Smartphone, Bike, UserCheck } from "lucide-react";

const requirements = [
    { text: "Valid Student ID card", icon: CreditCard },
    { text: "iOS or Android Smartphone", icon: Smartphone },
    { text: "Bicycle or Electric Scooter", icon: Bike },
    { text: "Must be 18+ Years Old", icon: UserCheck },
];

const steps = [
    {
        number: 1,
        title: "Apply Online",
        description:
            "Submit your basic details and university verification through our quick mobile app.",
    },
    {
        number: 2,
        title: "Quick Orientation",
        description:
            "Watch a 5-minute training video on how to use the app and safely navigate campus paths.",
    },
    {
        number: 3,
        title: "Start Delivering",
        description:
            "Go online, pick up your free thermal backpack, and start accepting delivery requests.",
    },
];

export function Requirements() {
    return (
        <section className="relative px-6 py-20 lg:px-20 bg-[#F8F7F6]">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {/* Left — What You'll Need */}
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
                            What You'll Need
                        </h2>
                        <p className="mt-2 text-base text-gray-500">
                            If you have these four things, you're ready to start earning
                            today.
                        </p>

                        <div className="mt-10 flex flex-col gap-0">
                            {requirements.map((req, index) => (
                                <div
                                    key={index}
                                    className="flex bg-white items-center gap-4 border-l-2 border-primary/30 py-5 pl-6 mb-5 rounded-xl"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                        <req.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-base font-semibold text-gray-900">
                                        {req.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — How to Start */}
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
                            How to Start
                        </h2>
                        <p className="mt-2 text-base text-gray-500">
                            Onboarding is seamless and takes less than 24 hours.
                        </p>

                        <div className="mt-10 flex flex-col">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-5">
                                    {/* Timeline */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                            {step.number}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="w-0.5 flex-1 bg-primary/20" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="pb-10">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {step.title}
                                        </h3>
                                        <p className="mt-1 text-base leading-relaxed text-gray-500">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}