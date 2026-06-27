import { DollarSign, Download, Filter, ShoppingBag, Soup } from "lucide-react";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const StatCard: React.FC<{
    label: string;
    value: string;
    pct: string;
    up: boolean;
    vs: string;
    icon: React.ReactNode;
    iconBg: string;
}> = ({ label, value, pct, up, vs, icon, iconBg }) => (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start justify-between">
        <div>
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <div className="flex items-center gap-2 mt-2">

            </div>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
            {icon}
        </div>
    </div>
);


export default function VendorOrdersPage() {
    return (
        <div className="space-y-5 pb-8">
            {/* Page Header */}
            <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Orders Hub</h1>
                    <p className="text-sm text-gray-500 mt-0.5">Manage incoming orders and track delivery status.</p>
                </div>
                <div className="flex items-center gap-3">
                    {/* creating filter shadcn dropdown menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-2 hover:border-gray-300 bg-white">
                                <Filter size={15} /> Filter
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>All</DropdownMenuItem>
                                <DropdownMenuItem>Pending</DropdownMenuItem>
                                <DropdownMenuItem>Completed</DropdownMenuItem>
                                <DropdownMenuItem>Cancelled</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <StatCard
                    label="New Orders"
                    value="12"
                    pct="+12.5%"
                    up
                    vs="vs yesterday"
                    icon={
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-300" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5.5H9l3-5.5 3 5.5h-2v5.5z" />
                        </svg>
                    }
                    iconBg="bg-orange-50"
                />

                <StatCard
                    label="Preparing"
                    value="5"
                    pct="-2.1%"
                    up={false}
                    vs="vs last month"
                 icon={ <Soup className="w-6 h-6 text-orange-500" />}
                    iconBg="bg-orange-50"
                />
                <StatCard
                    label="Ready for Pickup"
                    value="3"
                    pct="-2.1%"
                    up={false}
                    vs="vs last month"
                    icon={ <ShoppingBag className="w-6 h-6 text-green-500" />}
                    iconBg="bg-green-50"
                />
                <StatCard
                    label="Today's Revenue"
                    value="$4,290.00"
                    pct="+8.2%"
                    up
                    vs="vs last week"
   
                     icon={<DollarSign className="w-6 h-6 text-orange-200" />}
                    iconBg="bg-orange-50"
                />
            </div>
        </div>
    );
}