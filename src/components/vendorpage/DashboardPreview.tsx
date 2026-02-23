import { MaterialIcon } from "../ui/material-icon";
import dashboard from "@/assets/vendors/dashboard.png";

export function DashboardPreview() {
    return (
        <section className="relative px-6 py-20 lg:px-20">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#111827] rounded-3xl px-5 py-9">
                        <img src={dashboard} alt="" className="m-auto"/>
                    </div>
                    <div className="py-20">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">Real-time Control in the Palm of
                            Your Hand</h1>
                        <p className="text-lg leading-relaxed text-gray-500">Our Merchant App is built for high-speed kitchen environments.
Manage your menu, track live orders, and watch your revenue grow
in real-time.</p>
                            <div className="flex items-center gap-2">
                                <MaterialIcon icon="check_circle" className="text-primary" />
                                <div>
                                <h2 className="text-lg font-bold tracking-tight text-gray-900 lg:text-xl">One-Tap Menu Toggles</h2>
                                <p className="text-lg leading-relaxed text-gray-500">Instantly mark items as sold-out to avoid customer disappointment.</p>
                                </div>

                            </div>
                            <div className="flex items-center gap-2">
                                <MaterialIcon icon="check_circle" className="text-primary" />
                                <div>
                                <h2 className="text-lg font-bold tracking-tight text-gray-900 lg:text-xl">Live Analytics</h2>
                                <p className="text-lg leading-relaxed text-gray-500">See what sells best at different times of the day on campus.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <MaterialIcon icon="check_circle" className="text-primary" />
                                <div>
                                <h2 className="text-lg font-bold tracking-tight text-gray-900 lg:text-xl">Instant Notifications</h2>
                                <p className="text-lg leading-relaxed text-gray-500">Get loud alerts for new orders so you never miss a beat.</p>
                            </div>
                            </div>
                    </div>

                </div>
            </div>

        </section>
    )
}