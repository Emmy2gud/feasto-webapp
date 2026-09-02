
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

import { Switch } from "@/components/ui/switch"
import { BellDot } from "lucide-react";

export function Nav() {
    return (
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
            <nav className="flex justify-between w-full ">

                <div className="flex items-center">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components" className="font-semibold">Overview</BreadcrumbLink>
                            </BreadcrumbItem>

                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex bg-[#F1F5F9] rounded-full px-3 py-1.5">
                        <p className="mr-2">Store Status:</p>
                        <Switch className="data-[state=checked]:bg-green-500" />
                        <p className="text-green-500 ml-1">Open</p>
                        
                    </div><span className="mx-4">|</span>
                    <div >
                        <BellDot />

                    </div>
                </div>

            </nav>
        </div>
    )
}