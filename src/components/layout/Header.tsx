import { Menu, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}

        <div className="flex items-center gap-2">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <Link
            to=""
            className="flex items-center gap-2 font-bold text-xl text-black"
          >
            FEASTO
          </Link>
          {/* shift the menubar to the end */}
                    <div className="md:hidden ml-40">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Desktop Navigation / Search */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8 gap-4">
          <div className="relative flex-1">
            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Enter delivery address..."
              className="w-80 bg-background pl-8 rounded-full"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4 md:flex hidden">
          <div className="flex justify-between gap-10">
            <Link to="/about-vendors">Vendors</Link>
            <Link to="/about-rider">Riders</Link>
          </div>
          <Link to="/vendors">
          <Button variant="default" className="hidden md:inline-flex bg-black rounded-full">
            Join Campus
          </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background h-screen">
          <Input placeholder="Search..." />
          <nav className="flex flex-col gap-2 text-center space-y-5">
            <Link to="/about-vendors" className="md:inline-flex p-3  rounded-full hover:bg-[#EE8C2B] hover:text-white transition-all duration-300">Vendors</Link>
            <Link to="/about-rider" className="md:inline-flex p-3  rounded-full hover:bg-[#EE8C2B] hover:text-white transition-all duration-300">Riders</Link>
    
            <Link to="/vendors" className="md:inline-flex p-3  rounded-full hover:bg-[#EE8C2B] hover:text-white transition-all duration-300">
            Join Campus
          </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
