import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Info,  Flame } from "lucide-react";
import { useState } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import item1 from "@/assets/vendors/Item1.png"
import item2 from "@/assets/vendors/item2.png"
import item3 from "@/assets/vendors/item3.png"


const menus = [
  { id: 1, name: "Popular", icon: <Flame className="h-4 w-4" /> },
  { id: 2, name: "Breakfast", icon: null },
  { id: 3, name: "Drinks", icon: null },
  { id: 4, name: "Snacks", icon: null },
  { id: 5, name: "Main Dish", icon: null },
]

const foodItems = [
  {
    id: 1,
    name: "Signature Smash Burger",
    price: 1000,
    description: "Double beef patty, secret house sauce, caramelized onions, and swiss cheese.",
    image: item2,
    category: "Main Dish",
    isPopular: true,
    prepTime: "15 min",
    topins: [
      {
        name: "Extra protein",
        description: "Select up to 4 options",
        options: [
          { name: "Meat", price: 500 },
          { name: "Cheese", price: 200 },
        ]
      },
    ]
  },
  {
    id: 2,
    name: "Pepperoni Classico",
    price: 1500,
    description: "Artisan sourdough crust with spicy pepperoni and mozzarella.",
    category: "Main Dish",
    isPopular: true,
    prepTime: "20 min",
    image: item2,
  },
  {
    id: 3,
    name: "Loaded Breakfast Wrap",
    price: 850,
    description: "Scrambled eggs, crispy bacon, hash browns, and avocado salsa.",
    category: "Breakfast",
    isPopular: false,
    prepTime: "12 min",
    image: item1,
  },
  {
    id: 4,
    name: "Caramel Macchiato",
    price: 1200,
    description: "Freshly brewed espresso with steamed milk and vanilla syrup.",
    category: "Drinks",
    isPopular: true,
    prepTime: "5 min",
    image: item3,
  }
]

export default function VendorMenu() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Popular");
  const totalPages = 5;

  // Filter items based on active tab
  const filteredItems = foodItems.filter(item => {
    if (activeTab === "Popular") return item.isPopular;
    return item.category === activeTab;
  });

  return (
    <div className="w-full p-6 md:p-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Full Menu</h2>
          <p className="text-neutral-500 text-sm mt-1">Discover our carefully curated selections</p>
        </div>
      </header>

      <Tabs defaultValue="Popular" onValueChange={setActiveTab}>
        <TabsList className="bg-neutral-100/50 p-1.5 rounded-2xl h-auto flex-wrap justify-start gap-2 mb-8">
          {menus.map((menu) => (
            <TabsTrigger
              key={menu.id}
              value={menu.name}
              className="bg-transparent data-[state=active]:bg-white data-[state=active]:text-[#EE8C2B] data-[state=active]:shadow-sm px-6 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              {menu.icon}
              {menu.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 min-h-[400px]">
          {filteredItems.length > 0 ? (
            filteredItems.map((foodItem) => (
              <TabsContent
                key={foodItem.id}
                value={activeTab}
                className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-300"
              >
                <Card className="group overflow-hidden border-neutral-100 hover:border-[#EE8C2B]/30 hover:shadow-xl hover:shadow-[#EE8C2B]/5 transition-all duration-300 rounded-3xl p-0">
                  <CardContent className="h-38 p-4 " >
                    <div className="flex gap-4">
                      <div className="relative w-30 h-30 shrink-0 overflow-hidden rounded-2xl bg-neutral-100">
                        <img
                          src={foodItem.image}
                          alt={foodItem.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {foodItem.isPopular && (
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-[#EE8C2B] text-white border-none text-[10px] px-2 py-0.5">
                              Popular
                            </Badge>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col justify-between flex-grow py-1">
                        <div className="space-y-1">
                          <div className="flex items-start justify-between">
                            <h3 className="font-bold text-lg text-neutral-900 leading-relaxed line-clamp-1">
                              {foodItem.name}
                            </h3>
                            {/* <div className="flex items-center gap-1 text-neutral-400 text-xs">
                              <Clock className="h-3 w-3" />
                              {foodItem.prepTime}
                            </div> */}
                          </div>
                          <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                            {foodItem.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xl font-black text-[#EE8C2B]">
                            ₦{foodItem.price.toLocaleString()}
                          </p>
                          <Button
                            size="icon"
                            className="bg-[#EE8C2B] hover:bg-[#D67B22] text-white rounded-2xl shadow-lg shadow-[#EE8C2B]/20 transition-all active:scale-95"
                          >
                            <Plus className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-neutral-400 opacity-60">
              <div className="bg-neutral-100 p-6 rounded-full mb-4">
                <Info className="h-10 w-10" />
              </div>
              <p className="text-lg font-medium">No items found in this category</p>
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-100 italic">
          <Pagination>
            <PaginationContent className="gap-2">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="rounded-xl hover:bg-neutral-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 1}
                  className="rounded-xl data-[active=true]:bg-[#EE8C2B] data-[active=true]:text-white transition-all"
                  onClick={(e) => { e.preventDefault(); setCurrentPage(1); }}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 2}
                  className="rounded-xl data-[active=true]:bg-[#EE8C2B] data-[active=true]:text-white transition-all"
                  onClick={(e) => { e.preventDefault(); setCurrentPage(2); }}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="rounded-xl hover:bg-neutral-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Tabs>
    </div>
  );
}