import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import profile from "@/assets/images/profile.png"
import {
    PhoneCall,
    MessageSquare,
    Utensils,
    Bike,
    PackageCheck,
    Package,
    Search,
    Locate,
    ZoomIn,
    ZoomOut,
    Maximize2,
    Star,
    CheckCircle2,
    Clock,
    Info,
    ScrollText
} from "lucide-react";
import { Link } from "react-router-dom";
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';

// Order summary items
const orderItems = [
    { name: "Classic Cheeseburger", price: 18.00, qty: 2, note: "No onions on one of them" },
    { name: "Large Curly Fries", price: 4.50, qty: 1 },

];

const mapContainerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 37.4275,
    lng: -122.1697
};

export default function OrderTrackingPage() {
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Load Google Maps
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY"
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);

        // Request directions
        const directionsService = new google.maps.DirectionsService();
        const origin = { lat: 37.4275, lng: -122.1697 }; // The Grill location
        const destination = { lat: 37.4315, lng: -122.1650 }; // Your Dorm location

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK && result) {
                    setDirections(result);
                }
            }
        );
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    const directionsOptions = useMemo(() => ({
        suppressMarkers: false,
        polylineOptions: {
            strokeColor: '#EE8C2B',
            strokeWeight: 5,
            strokeOpacity: 0.8
        }
    }), []);

    const steps = [
        { title: "Order Placed", time: "12:25 PM", status: "completed", icon: <Package className="h-5 w-5" /> },
        { title: "Kitchen is Preparing", time: "12:30 PM", status: "completed", icon: <Utensils className="h-5 w-5" /> },
        { title: "Rider is On Route", time: "12:43 PM", status: "current", icon: <Bike className="h-5 w-5" /> },
        { title: "Order Delivered", time: "Est. 12:55 PM", status: "upcoming", icon: <PackageCheck className="h-5 w-5" /> },
    ];

    return (
        <div className="min-h-screen bg-neutral-50/50 py-10">
            <div className="container mx-auto px-4 max-w-7xl space-y-8">

                <div className="grid lg:grid-cols-[1fr_420px] gap-8">

                    {/* Left Column: Map & Progress */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                        {/* Status Bar */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-sm">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="space-y-2 text-center md:text-left mb-10">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                        <Badge className="bg-[#EE8C2B]/10 text-[#EE8C2B] border-none font-black text-[10px] tracking-widest uppercase px-4 py-2 rounded-full">
                                            In Transit
                                        </Badge>
                                        <span className="text-xs font-bold text-neutral-400">Order #CE-0E207A</span>
                                    </div>
                                    <h1 className="text-5xl font-black text-neutral-900 tracking-tighter">Track Your Order</h1>
                                    <p className="text-lg text-neutral-500 font-medium ">Order #CE-88291 • From The Student Union Grill.</p>
                                </div>
                                <div className="text-center bg-[#EE8C2B]/10 text-[#EE8C2B] md:text-right flex justify-center items-center gap-2 border border-primary px-4 py-2 rounded-2xl  mb-5">
                                    <div>
                                        <Clock className="text-[#EE8C2B]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em]  ">Estimated Arrival</p>
                                        <p className="text-xl font-black text-left  tracking-tighter">12:43<span className="text-xl ml-1 uppercase">PM</span></p>
                                    </div>

                                </div>
                            </div>
                            <div className="relative flex items-center justify-between">
                                {/* Connecting Lines */}
                                <div className="absolute top-[26px] left-[5%] right-[5%] h-1 bg-neutral-100 -z-0 ">
                                    <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: '66%' }}></div>
                                </div>

                                {steps.map((step, idx) => (
                                    <div key={idx} className="relative z-10 flex flex-col items-center gap-4 ">
                                        <div className={`
                                            h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500  shadow-lg
                                            ${step.status === 'completed' ? 'bg-emerald-500 text-white shadow-emerald-500/20' : ''}
                                            ${step.status === 'current' ? 'bg-[#EE8C2B] text-white shadow-orange-500/30 scale-110' : ''}
                                            ${step.status === 'upcoming' ? 'bg-neutral-100 text-neutral-300 shadow-none' : ''}
                                        `}>
                                            {step.icon}
                                        </div>
                                        <div className="text-center hidden md:block">
                                            <p className={`text-[10px] font-black uppercase tracking-widest ${step.status === 'upcoming' ? 'text-neutral-300' : 'text-neutral-900'}`}>{step.title}</p>
                                            <p className="text-[10px] font-bold text-neutral-400 mt-1">{step.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Container */}
                        <div className="bg-white rounded-[3rem] border border-neutral-100 shadow-xl overflow-hidden relative group">
                            <div className="h-[520px] relative">
                                {/* Search Overlay */}
                                <div className="absolute top-8 left-8 right-8 z-10">
                                    <div className="relative flex items-center gap-4">
                                        <div className="relative flex-1">
                                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                            <Input
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Track rider location..."
                                                className="h-16 pl-16 pr-8 bg-white/90 placeholder:text-neutral-400 placeholder:font-medium placeholder:tracking-widest backdrop-blur-md rounded-3xl border-neutral-200 shadow-2xl font-bold italic transition-all focus:bg-white"
                                            />
                                        </div>
                                        <Button className="h-16 w-16 bg-[#EE8C2B] text-white rounded-3xl shadow-xl hover:bg-[#D67B22]">
                                            <Locate className="h-6 w-6" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Map Controls */}
                                <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-3">
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl bg-white border-neutral-200 shadow-xl" onClick={() => map?.setZoom((map?.getZoom() || 14) + 1)}>
                                        <ZoomIn className="h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl bg-white border-neutral-200 shadow-xl" onClick={() => map?.setZoom((map?.getZoom() || 14) - 1)}>
                                        <ZoomOut className="h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl bg-white border-neutral-200 shadow-xl" onClick={() => map?.setCenter(center)}>
                                        <Maximize2 className="h-5 w-5" />
                                    </Button>
                                </div>

                                {/* Google Map */}
                                {isLoaded ? (
                                    <GoogleMap
                                        mapContainerStyle={mapContainerStyle}
                                        center={center}
                                        zoom={14}
                                        onLoad={onLoad}
                                        onUnmount={onUnmount}
                                        options={{
                                            streetViewControl: false,
                                            mapTypeControl: false,
                                            fullscreenControl: false,
                                            zoomControl: false,
                                        }}
                                    >
                                        {directions && (
                                            <DirectionsRenderer
                                                directions={directions}
                                                options={directionsOptions}
                                            />
                                        )}
                                    </GoogleMap>
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 gap-4">
                                        <div className="h-12 w-12 border-4 border-[#EE8C2B] border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-neutral-400 font-black uppercase tracking-widest text-xs italic">Syncing with satellite...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Rider & Order */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
                        {/* Rider Card */}
                        <div className="bg-white rounded-[2.5rem] p-8 border border-neutral-100 shadow-xl space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                            </div>

                            <div className="flex items-center gap-6">
                                <div >
                                    <img src={profile} alt="" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black text-neutral-900 tracking-tight">Alex Rodriguez</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                        <span className="text-[10px] font-bold text-neutral-400">4.9 (2,100+ deliveries)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <Button className="h-15 rounded-2xl bg-[#EE8C2B] text-white font-black uppercase tracking-widest text-xs gap-3 hover:bg-black transition-all">
                                    <MessageSquare className="h-4 w-4" />
                                    Contact Rider
                                </Button>
                                <Button variant="outline" className="h-15 bg-[#EE8C2B]/10 rounded-2xl border-0 text-[#EE8C2B] font-black uppercase tracking-widest text-xs gap-3 hover:bg-neutral-100 transition-all">
                                    <PhoneCall className="h-4 w-4 text-[#EE8C2B]" />
                                    Voice Call
                                </Button>
                            </div>
                        </div>

                        {/* Order Details Card */}
                        <div className="bg-white rounded-[2.5rem] p-8 border border-neutral-100 shadow-sm space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-black text-neutral-900 tracking-tight flex items-center gap-2"><ScrollText className="text-[#EE8C2B]" /> Order Details</h3>
                                <Link to="/vendors" className="text-[10px] font-black uppercase tracking-widest text-[#EE8C2B] hover:underline">View Menu</Link>
                            </div>

                            <div className="space-y-6">
                                {orderItems.map((item, idx) => (
                                    <div key={idx} className="flex items-start justify-between group">
                                        <div className="flex gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center font-black text-xs text-neutral-400 group-hover:bg-orange-50 group-hover:text-[#EE8C2B] transition-colors">{item.qty}x</div>
                                            <div>
                                                <p className="font-bold text-neutral-900 tracking-tight">{item.name}</p>
                                                {item.note && <p className="text-[10px] text-neutral-400 italic mt-0.5">{item.note}</p>}
                                            </div>
                                        </div>
                                        <p className="font-black text-neutral-900 tracking-tighter">${item.price.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="h-px bg-neutral-900/10 shadow-sm"></div>
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

                            {/* Help Section */}
                            <div className="bg-[#F8FAFC] rounded-2xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-[#EE8C2B]/20 rounded-full  group-hover:scale-150 transition-transform duration-1000"></div>
                                <div className="relative z-10 space-y-4 flex items-center gap-3">
                                    <div ><Info className="h-4 w-4 text-gray-400" /></div>
                                    <p className="text-sm text-slate-400 font-medium ">Need to make a change? Please contact the
                                        restaurant directly for order modifications.
                                        <span className="text-[#EE8C2B] font-black">View
                                            Restaurant Details.</span></p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
