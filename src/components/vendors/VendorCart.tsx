import { ArrowRight, ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import burger from "../../assets/images/vendor-fitbites.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function VendorCart() {
    const [count, setCount] = useState<number>(1);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <div className="col-span-1 ">
        <div className="flex items-center justify-between px-4 py-5 border-b border-neutral-100 bg-[#FEF9F4]">
            <div className="flex items-center gap-2"><ShoppingBag className=" text-[#EE8C2B]"/>Your Order</div>
            <Badge>3 items</Badge>
        </div>
        <div className="px-4 py-5 overflow-y-auto h-[300px]">
           {
            Array.from({length: 5}).map((_,index)=>(
                         <div className="flex items-center gap-2 p-2 " key={index}>
                <div className="w-20 h-20 shrink-0"><img src={burger} alt=""  className="w-20 h-20 object-cover rounded-2xl" /></div>
                <div>
                    <h1 className="font-bold text-lg text-neutral-900 leading-relaxed line-clamp-1">Signature Smash Burger</h1>
                    <p   className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">Classic Beef Patty, Brioche Bun, Secret Sauce, Lettuce, Tomato</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 mt-1">
                            <button onClick={decrement} className="border border-[#EE8C2B] rounded-full w-8 h-8 flex items-center justify-center">-</button>
                            <p>{count}</p>
                            <button onClick={increment} className="border border-[#EE8C2B] rounded-full w-8 h-8 flex items-center justify-center">+</button>
                        </div>
                        <p className="font-bold text-lg text-neutral-900 leading-relaxed line-clamp-1">$9.00</p>
                    </div>
                </div>
            </div>
            ))
           }
   

        </div>
        <div className="p-4 border-t border-neutral-100 bg-[#FEF9F4]">
        <div className=" ">
            <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <span>$18.00</span>
            </div>
            <div className="flex justify-between mb-2">
                <p>Delivery Fee</p>
                <span>$18.00</span>
            </div>
            <div className="flex justify-between">
                <p className="font-bold text-lg text-neutral-900 leading-relaxed line-clamp-1">Total</p>
                <span className="font-bold text-lg text-primary leading-relaxed line-clamp-1">$18.00</span>
            </div>
        </div>
        <div className="mt-5">
            <Link to="/checkout" className="w-full bg-primary text-white py-4 rounded-full flex items-center justify-center gap-2">Checkout <ArrowRight/></Link>
            <p className="text-xs text-neutral-500 mt-3 mb-2 text-center">Average delivery in 25 mins to your location</p>
        </div>
        </div>

        </div>
    );
}