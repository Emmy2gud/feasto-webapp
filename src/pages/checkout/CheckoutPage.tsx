import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    CreditCard,
    MapPin,
    Clock,

    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Headset,
    Wallet
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import fries from "../../assets/images/fries.png"
import burger from "../../assets/images/cakeburger.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-neutral-50/50 py-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="mb-8 md:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Checkout</h1>
                    <div className="flex items-center gap-3 text-sm text-neutral-500 font-medium mt-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span>Secure Checkout</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content: Delivery & Payment Details */}
                    <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-left-6 duration-700">
                        {/* Section 1: Delivery Information */}
                        <div className="space-y-8">
                            <div className="grid gap-8 p-6 md:p-10 bg-white rounded-[2.5rem] border border-neutral-100 shadow-sm transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-[#FDF3EA]  text-[#EE8C2B] flex items-center justify-center text-xl font-black "><MapPin className="h-5 w-5 sm:h-6 sm:w-6" /></div>
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">Delivery Details</h2>
                                        <p className="text-sm sm:text-lg text-neutral-500 font-medium ">Where should we meet you on campus?</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-[10px] font-black uppercase tracking-[0.2em]  ml-4">Location</Label>
                                    <Input placeholder="convenant university,otta" className="h-16 px-8 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white transition-all font-bold placeholder:text-neutral-300" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <Label className="text-[10px] font-black uppercase tracking-[0.2em]  ml-4">Room / Flat Number</Label>
                                        <div className="relative">
                                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                            <Input placeholder="e.g. 402B" className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white transition-all font-bold placeholder:text-neutral-300" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-[10px] font-black uppercase tracking-[0.2em]  ml-4">Phone Number</Label>
                                        <Input placeholder="e.g. 08000000000" className="h-16 px-8 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white transition-all font-bold placeholder:text-neutral-300" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                    <Badge variant="outline" className="h-10 sm:h-12 px-4 sm:px-6 rounded-2xl border-neutral-100 bg-neutral-50/30 text-neutral-500 font-bold gap-3 text-xs uppercase tracking-widest">
                                        <Clock className="h-4 w-4 text-[#EE8C2B]" />
                                        Delivery: 20-30 mins
                                    </Badge>
                                    <Badge variant="outline" className="h-10 sm:h-12 px-4 sm:px-6 rounded-2xl border-neutral-100 bg-neutral-50/30 text-neutral-500 font-bold gap-3 text-xs uppercase tracking-widest">
                                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                                        Contactless Delivery
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Payment Method */}
                        <div className="space-y-8 p-6 md:p-10 bg-white rounded-[2.5rem] border border-neutral-100 shadow-sm ">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-[#FDF3EA]  text-[#EE8C2B] flex items-center justify-center text-xl font-black"><Wallet className="h-5 w-5 sm:h-6 sm:w-6" /></div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">Payment Method</h2>
                                    <p className="text-sm sm:text-lg text-neutral-500 font-medium ">Fast and secure options for students</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <Tabs defaultValue="wallet" className="w-full space-y-8">
                                    <TabsList className="bg-transparent p-0 w-full mt-10">
                                        <Carousel className="w-full" opts={{ align: "start", loop: false }}>
                                            <CarouselContent className="-ml-2">
                                                <CarouselItem className="basis-[85%] sm:basis-1/2 pl-2">
                                                    <TabsTrigger
                                                        value="wallet"
                                                        className="w-full data-[state=active]:border-[#EE8C2B] data-[state=active]:shadow-xl border-4 border-transparent flex items-center gap-4 sm:gap-5 p-4 sm:p-6 bg-white rounded-[2rem] sm:rounded-[2.5rem] text-left transition-all group"
                                                    >
                                                        <div className="h-10 w-10 sm:h-14 sm:w-14 shrink-0 rounded-xl sm:rounded-2xl bg-[#EE8C2B] text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
                                                            <Wallet className="h-5 w-5 sm:h-6 sm:w-6" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-black text-neutral-900 text-base sm:text-lg leading-none truncate">Campus Wallet</p>
                                                            <p className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-medium italic truncate">Fast & Recommended</p>
                                                        </div>
                                                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#EE8C2B] opacity-0 group-data-[state=active]:opacity-100 transition-opacity" />
                                                    </TabsTrigger>
                                                </CarouselItem>
                                                <CarouselItem className="basis-[85%] sm:basis-1/2 pl-2">
                                                    <TabsTrigger
                                                        value="card"
                                                        className="w-full data-[state=active]:border-[#EE8C2B] data-[state=active]:shadow-xl border border-neutral-100 flex items-center gap-4 sm:gap-5 p-4 sm:p-6 bg-white rounded-[2rem] sm:rounded-[2.5rem] text-left transition-all group"
                                                    >
                                                        <div className="h-10 w-10 sm:h-14 sm:w-14 shrink-0 rounded-xl sm:rounded-2xl bg-neutral-100 text-neutral-400 group-data-[state=active]:bg-[#EE8C2B] group-data-[state=active]:text-white flex items-center justify-center transition-all">
                                                            <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-black text-neutral-900 text-base sm:text-lg leading-none truncate">Credit Card</p>
                                                            <p className="text-[10px] sm:text-xs text-neutral-400 mt-1 font-medium italic truncate">Visa, MC, or Amex</p>
                                                        </div>
                                                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#EE8C2B] opacity-0 group-data-[state=active]:opacity-100 transition-opacity" />
                                                    </TabsTrigger>
                                                </CarouselItem>
                                            </CarouselContent>
                                        </Carousel>
                                    </TabsList>

                                    <TabsContent value="wallet" className="mt-8 sm:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="p-6 sm:p-10 bg-[#0a0f1d] rounded-[2rem] sm:rounded-[2.5rem] text-white space-y-6 sm:space-y-8 relative overflow-hidden">
                                            <div className="absolute -top-10 -right-10 h-48 w-48 sm:h-64 sm:w-64 bg-[#EE8C2B]/10 rounded-full blur-[80px] sm:blur-[100px]"></div>
                                            <div className="relative z-10 space-y-6">
                                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                                    <div>
                                                        <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EE8C2B]">Current Balance</Label>
                                                        <p className="text-3xl sm:text-5xl font-black mt-2">$42.50</p>
                                                    </div>
                                                    <Badge className="bg-[#EE8C2B] text-white border-0 px-4 py-2 rounded-xl font-black text-[10px]">RECOMMENDED</Badge>
                                                </div>
                                                <div className="h-px bg-white/10"></div>
                                                <p className="text-xs sm:text-sm text-neutral-400 font-medium italic">Insufficient funds? Your linked backup method will be used.</p>
                                                <Button variant="outline" className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 font-black uppercase tracking-widest text-[10px]">
                                                    Quick Top-up
                                                </Button>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="card" className="mt-8 sm:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="p-6 sm:p-10 bg-[#0a0f1d] rounded-[2rem] sm:rounded-[2.5rem] text-white space-y-6 sm:space-y-8 overflow-hidden relative">
                                            <div className="absolute -top-10 -right-10 h-48 w-48 sm:h-64 sm:w-64 bg-[#EE8C2B]/10 rounded-full blur-[80px] sm:blur-[100px]"></div>
                                            <div className="relative z-10 space-y-6">
                                                <div className="space-y-3">
                                                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EE8C2B] ml-2">Card Number</Label>
                                                    <Input placeholder="0000 0000 0000 0000" className="h-14 sm:h-16 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl sm:rounded-3xl font-mono text-base sm:text-lg px-6 sm:px-8 tracking-widest focus:bg-white/10 transition-all border-none ring-1 ring-white/10" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Expiry Date</Label>
                                                        <Input placeholder="MM / YY" className="h-16 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-3xl font-mono text-center focus:bg-white/10 transition-all border-none ring-1 ring-white/10" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Secret CVV</Label>
                                                        <Input placeholder="123" className="h-16 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-3xl font-mono text-center focus:bg-white/10 transition-all border-none ring-1 ring-white/10" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar: Order Summary */}
                    <aside className="lg:w-[440px] shrink-0 animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="sticky top-12 space-y-8">
                            <Card className="rounded-[2rem] border-neutral-100 shadow-xl shadow-neutral-100/50 overflow-hidden">
                                <div className="p-6 md:p-10 space-y-10">
                                    <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-white/10 rounded-full blur-3xl"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black tracking-tight">Order Summary</h3>
                                    </div>
                                </div>
                                <CardContent className="p-5  space-y-8 bg-white">
                                    {/* Items */}
                                    <div className="space-y-6">
                                        {[
                                            { name: "Signature Burger", price: 12.99, qty: 1, img: burger },
                                            { name: "Truffle Fries", price: 6.50, qty: 1, img: fries }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between group">
                                                <div className="flex gap-4 items-center">
                                                    <img src={item.img} alt="" className="h-8 w-8 rounded-xl bg-neutral-100 flex items-center justify-center text-[10px] font-black text-neutral-900 shadow-inner" />

                                                    <div>
                                                        <p className="font-black text-neutral-900 uppercase tracking-tight text-sm">{item.name}</p>
                                                        <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-0.5">Classic Preparation</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-black text-neutral-900 tracking-tight">${item.price.toFixed(2)}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="h-px bg-neutral-100"></div>

                                    {/* Charges */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-400 font-bold uppercase tracking-widest text-[10px]">Subtotal</span>
                                            <span className="text-neutral-900 font-black tracking-tight">$24.49</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-400 font-bold uppercase tracking-widest text-[10px]">Delivery fee</span>
                                            <span className="text-emerald-500 font-black tracking-tight">-$2.45</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-400 font-bold uppercase tracking-widest text-[10px] italic">Taxes</span>
                                            <span className="text-emerald-500 font-black tracking-tight uppercase">Free</span>
                                        </div>
                                    </div>

                                    <div className="h-px bg-neutral-900/10 shadow-sm"></div>

                                    {/* Total */}
                                    <div className="  bg-neutral-50 p-6 rounded-[2rem] border border-neutral-100">
                                        <div className="flex justify-between items-center">
                                            <p className="text-2xl font-black uppercase tracking-[0.3em]  mb-1">Total</p>
                                            <p className="text-2xl text-[#EE8C2B] font-black tracking-tighter">$22.04</p>
                                        </div>
                                    </div>
                                    {/* form for promo code */}
                                    <form action="" className="flex gap-2">
                                        <input type="text" placeholder="Promo Code" className="w-full h-12 rounded-2xl border border-neutral-100 px-4 text-sm font-black uppercase tracking-widest" />
                                        <button type="submit" className="w-30 h-12 rounded-2xl bg-neutral-900 text-white font-black text-xl hover:bg-black hover:-translate-y-2 transition-all group relative overflow-hidden shadow-2xl shadow-black/20">Apply</button>
                                    </form>

                                    <Button
                                        asChild
                                        className="w-full h-20 rounded-[2rem] bg-neutral-900 text-white font-black text-xl hover:bg-black hover:-translate-y-2 transition-all group relative overflow-hidden shadow-2xl shadow-black/20"
                                    >
                                        <Link to="/tracking">
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                Place Order
                                                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#EE8C2B] to-[#D67B22] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </Link>
                                    </Button>

                                    <div className="flex items-center justify-center gap-3 pt-2">
                                        <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest italic">By placing your order, you agree to FEASTO' Terms of Service and
                                            Privacy Policy.</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Promo Code Card */}
                            <div className="p-8 bg-transparent rounded-[2.5rem] border-2 border-dashed border-neutral-400 shadow-xl shadow-black/5 flex items-center justify-between group hover:border-[#EE8C2B]/30 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-neutral-50 flex items-center justify-center text-[#EE8C2B] group-hover:scale-110 transition-transform">
                                        <Headset className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-neutral-900 uppercase tracking-tight">Need Help?</p>
                                        <p className="text-xs text-neutral-400 font-medium italic">Contact our support team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}   
