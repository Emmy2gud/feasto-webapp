import { ChevronDown, DollarSign, Eye, Filter, Search, ShoppingBag, Soup } from "lucide-react";
import React, { useMemo, useState } from "react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import StatusBadge from "@/components/layout/dashboard/StatusBadge";
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

const orders = [
    {
        id: "ORD-2458",
        customer: "John Doe",
        initials: "JD",
        items: "2× Classic Cheeseburger, 1× ...",
        description: "+2 Extra Cheese, No Onion",
        total: 24.5,
        status: "New Order",
        time: "2 mins ago",
    },
    {
        id: "ORD-2457",
        customer: "Sarah Al-Fayed",
        initials: "AS",
        items: "1× Spicy Jollof Rice Combo",
        description: "1× Spicy Level: Hot",
        total: 12.99,
        status: "New Order",
        time: "5 mins ago",
    },
    {
        id: "ORD-2456",
        customer: "Mike K.",
        initials: "MK",
        items: "3× Milkshakes (Vanilla, Choco)",
        description: "To-Go",
        total: 18.0,
        status: "Preparing",
        time: "12 mins ago",
    },
    {
        id: "ORD-2455",
        customer: "Elena L.",
        initials: "EL",
        items: "1× Vegan Basal Bowl",
        description: "Extra dressing",
        total: 14.2,
        status: "Ready",
        time: "28 mins ago",
    },
    {
        id: "ORD-2454",
        customer: "Tom Moody",
        initials: "TM",
        items: "2× Double Beef Burger",
        description: "—",
        total: 22.0,
        status: "Preparing",
        time: "15 mins ago",
    },
    {
        id: "ORD-2453",
        customer: "David Smith",
        initials: "DS",
        items: "1× Chicken Burger",
        description: "Extra sauce",
        total: 16.5,
        status: "Completed",
        time: "35 mins ago",
    },
    {
        id: "ORD-2452",
        customer: "Mary James",
        initials: "MJ",
        items: "2× Chicken Shawarma",
        description: "No onions",
        total: 19.0,
        status: "Completed",
        time: "42 mins ago",
    },
    {
        id: "ORD-2451",
        customer: "Alex Brown",
        initials: "AB",
        items: "1× Fried Rice Combo",
        description: "Extra chicken",
        total: 15.75,
        status: "Cancelled",
        time: "1 hour ago",
    },
];
export default function VendorOrdersPage() {
    const [activeTab, setActiveTab] = useState("New Order");
    const [search, setSearch] = useState("");

    const tabStatuses = [
        "New Order",
        "Preparing",
        "Ready",
        "Completed",
        "Cancelled",
    ];

    // Count orders for each tab
    const getCount = (status: any) => {
        return orders.filter((order: any) => order.status === status).length;
    };

    // Filter orders based on selected tab + search
    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchesTab = order.status === activeTab;

            const searchText = search.toLowerCase();

            const matchesSearch =
                order.customer.toLowerCase().includes(searchText) ||
                order.id.toLowerCase().includes(searchText) ||
                order.items.toLowerCase().includes(searchText);

            return matchesTab && matchesSearch;
        });
    }, [activeTab, search]);
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
                    icon={<Soup className="w-6 h-6 text-orange-500" />}
                    iconBg="bg-orange-50"
                />
                <StatCard
                    label="Ready for Pickup"
                    value="3"
                    pct="-2.1%"
                    up={false}
                    vs="vs last month"
                    icon={<ShoppingBag className="w-6 h-6 text-green-500" />}
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
            <div>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">

            {/* ================= TABS ================= */}
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
            >
                <TabsList className="w-full  justify-start rounded-none border-b border-gray-100 bg-white px-0  gap-7">

                    {tabStatuses.map((status) => (
                        <TabsTrigger
                            key={status}
                            value={status}
                            className="
                                h-9
                                w-full
                                rounded-none
                                border-b-2
                                border-transparent
                                
                                 px-0
                                text-sm
                                font-normal
                                text-gray-500
                                data-[state=active]:border-b-orange-400
                                data-[state=active]:text-orange-500
                                data-[state=active]:shadow-none
                                data-[state=active]:bg-orange-100
                                hover:text-gray-900
                            "
                        >
                            <span className="flex items-center gap-2">
                                {status}

                                <span
                                    className="
                                        min-w-5
                                        h-5
                                        px-1.5
                                        flex
                                        items-center
                                        justify-center
                                        rounded-full
                                       
                            bg-orange-600
                            text-white
                                        text-[11px]
                                        font-medium
                                    "
                                >
                                    {getCount(status)}
                                </span>
                            </span>
                        </TabsTrigger>
                    ))}

                </TabsList>
            </Tabs>


            {/* ================= SEARCH ================= */}
            <div className="p-4 border-b border-gray-100">
                <div className="relative w-80">

                    <Search
                        className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            h-4
                            w-4
                            text-gray-400
                        "
                    />

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search order ID or customer..."
                        className="
                            w-full
                            h-10
                            pl-9
                            pr-3
                            rounded-xl
                            bg-gray-50
                            border
                            border-gray-200
                            text-sm
                            outline-none
                            focus:border-orange-400
                            focus:ring-2
                            focus:ring-orange-100
                        "
                    />

                </div>
            </div>


            {/* ================= TABLE ================= */}
            <Table>

                <TableHeader>
                    <TableRow className="bg-gray-50/50">

                        <TableHead className="pl-5 text-[11px] uppercase tracking-wide text-gray-500">
                            Order Details
                        </TableHead>

                        <TableHead className="text-[11px] uppercase tracking-wide text-gray-500">
                            Items
                        </TableHead>

                        <TableHead className="text-[11px] uppercase tracking-wide text-gray-500">
                            Total
                        </TableHead>

                        <TableHead className="text-[11px] uppercase tracking-wide text-gray-500">
                            Status
                        </TableHead>

                        <TableHead className="text-[11px] uppercase tracking-wide text-gray-500">
                            Time Elapsed
                        </TableHead>

                        <TableHead className="pr-5 text-right text-[11px] uppercase tracking-wide text-gray-500">
                            Actions
                        </TableHead>

                    </TableRow>
                </TableHeader>


                <TableBody>

                    {filteredOrders.length > 0 ? (

                        filteredOrders.map((order) => (

                            <TableRow
                                key={order.id}
                                className="hover:bg-gray-50/50"
                            >

                                {/* ORDER DETAILS */}
                                <TableCell className="pl-5">

                                    <div className="flex items-center gap-3">

                                        <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-xs font-medium">
                                            {order.initials}
                                        </div>

                                        <div>
                                            <p className="font-semibold text-sm text-gray-900">
                                                {order.customer}
                                            </p>

                                            <p className="text-xs text-gray-400">
                                                #{order.id}
                                            </p>
                                        </div>

                                    </div>

                                </TableCell>


                                {/* ITEMS */}
                                <TableCell>

                                    <div>
                                        <p className="text-sm text-gray-700">
                                            {order.items}
                                        </p>

                                        <p className="text-xs text-gray-400">
                                            {order.description}
                                        </p>
                                    </div>

                                </TableCell>


                                {/* TOTAL */}
                                <TableCell>

                                    <span className="font-semibold text-sm text-gray-900">
                                        ${order.total.toFixed(2)}
                                    </span>

                                </TableCell>


                                {/* STATUS */}
                                <TableCell>

                                    <StatusBadge status={order.status} />

                                </TableCell>


                                {/* TIME */}
                                <TableCell>

                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                        {order.time}
                                    </div>

                                </TableCell>


                                {/* ACTIONS */}
                                <TableCell className="pr-5">

                                    <div className="flex items-center justify-end gap-3">

                                        <button
                                            className="
                                                text-gray-400
                                                hover:text-gray-700
                                                transition
                                            "
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>


                                        {order.status === "New Order" && (
                                            <button
                                                className="
                                                    bg-orange-500
                                                    hover:bg-orange-600
                                                    text-white
                                                    text-xs
                                                    font-medium
                                                    px-4
                                                    py-1.5
                                                    rounded-full
                                                    transition
                                                "
                                            >
                                                Accept
                                            </button>
                                        )}


                                        {order.status === "Preparing" && (
                                            <button
                                                className="
                                                    flex
                                                    items-center
                                                    gap-1
                                                    border
                                                    border-gray-200
                                                    bg-white
                                                    hover:bg-gray-50
                                                    text-gray-700
                                                    text-xs
                                                    px-3
                                                    py-1.5
                                                    rounded-full
                                                "
                                            >
                                                Update Status
                                                <ChevronDown className="w-3 h-3" />
                                            </button>
                                        )}


                                        {order.status === "Ready" && (
                                            <button
                                                className="
                                                    border
                                                    border-gray-200
                                                    bg-white
                                                    hover:bg-gray-50
                                                    text-gray-700
                                                    text-xs
                                                    px-4
                                                    py-1.5
                                                    rounded-full
                                                "
                                            >
                                                Hand Over
                                            </button>
                                        )}

                                    </div>

                                </TableCell>

                            </TableRow>

                        ))

                    ) : (

                        <TableRow>
                            <TableCell
                                colSpan={6}
                                className="h-32 text-center text-gray-400"
                            >
                                No orders found.
                            </TableCell>
                        </TableRow>

                    )}

                </TableBody>

            </Table>


            {/* ================= PAGINATION ================= */}
            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">

                <p className="text-xs text-gray-400">
                    Showing 1 to {filteredOrders.length} of{" "}
                    {filteredOrders.length} orders
                </p>

                <Pagination className="w-auto">

                    <PaginationContent>

                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                className="text-xs text-gray-400"
                            />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                className="text-xs"
                                isActive
                            >
                                1
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                className="text-xs"
                            >
                                2
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                className="text-xs"
                            >
                                3
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                className="text-xs"
                            />
                        </PaginationItem>

                    </PaginationContent>

                </Pagination>

            </div>

        </div>

            </div>
        </div>
    );
}