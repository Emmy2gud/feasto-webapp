import { Menu, MapPin, X, User, LogIn, UserPlus, Store, Bike, Settings, LogOut, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-12 w-12 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-all"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-neutral-900" />
          </Button>

          <Link to="/" className="flex items-center gap-3 group transition-transform active:scale-95">
            <div className="h-10 w-10 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all">
              <img src={logo} alt="Feasto Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-neutral-900 group-hover:text-[#EE8C2B] transition-colors">
              FEASTO
            </span>
          </Link>
        </div>



        {/* Desktop Navigation / Search */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8 gap-4">
          <div className="relative flex-1">
            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Enter delivery address..."
              className="w-90 bg-background pl-8 rounded-full"
            />
          </div>
        </div>
        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8 ml-20">

   
        </nav> */}


        <div className="flex items-center gap-3">

          {/* creating dropdown menu and bringing the menu untop of the navbar*/}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className=" p-2 rounded-2xl bg-neutral-900 text-white flex items-center justify-center hover:bg-black transition-all shadow-lg active:scale-90">

                <User className="h-5 w-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" z-50">
              <DropdownMenuItem>
                <Link to="/profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile

                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings

                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/login" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Login

                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/signup" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Signup

                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>

              </DropdownMenuItem>
              <DropdownMenuItem className="bg-red-200">
                <Link to="/logout" className="flex items-center gap-2 text-red-500">
                  <LogOut className="h-4 w-4 text-red-500" />
                  Logout

                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/checkout" className="relative h-12 w-12 rounded-2xl bg-[#EE8C2B] text-white flex items-center justify-center hover:bg-[#D67B22] transition-all shadow-lg shadow-[#EE8C2B]/20 active:scale-90 md:ml-2">
            < ScrollText className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-white text-[#EE8C2B] text-[10px] font-black border-2 border-[#EE8C2B] flex items-center justify-center shadow-sm">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Modern Mobile Menu Slider */}
      <div
        className={`fixed bg-white h-screen inset-0 z-[110] md:hidden transition-all duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-all duration-500"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <aside
          className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Menu Header */}
          <div className="p-6 flex items-center justify-between border-b border-neutral-50">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg overflow-hidden">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-black text-xl tracking-tighter">FEASTO</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="h-10 w-10 rounded-xl bg-neutral-50"
            >
              <X className="h-5 w-5 text-neutral-900" />
            </Button>
          </div>

          {/* Menu Body */}
          <div className="flex-1 overflow-y-auto py-8 px-6 space-y-10">
            {/* Main Navigation */}
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Explore Campus</p>
              <nav className="space-y-2">
                {[
                  { icon: <Store className="h-5 w-5" />, label: "Food Vendors", path: "/vendors" },
                  { icon: <Bike className="h-5 w-5" />, label: "Rider Network", path: "/about-rider" },
                  { icon: <MapPin className="h-5 w-5" />, label: "Join Campus", path: "/about-vendors" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#FDF3EA] text-[#EE8C2B] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="font-bold text-neutral-900">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Account Actions */}
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Your Account</p>
              <div className="grid gap-3">
                <Link to="/login" className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-all">
                  <div className="h-10 w-10 rounded-xl bg-white text-neutral-900 flex items-center justify-center border border-neutral-100 shadow-sm">
                    <LogIn className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-neutral-900">Login</span>
                </Link>
                <Link to="/signup" className="flex items-center gap-4 p-4 rounded-2xl bg-[#EE8C2B] hover:bg-[#D67B22] transition-all text-white shadow-lg shadow-[#EE8C2B]/20">
                  <div className="h-10 w-10 rounded-xl bg-white/20 text-white flex items-center justify-center backdrop-blur-sm">
                    <UserPlus className="h-5 w-5" />
                  </div>
                  <span className="font-bold">Sign Up</span>
                </Link>

                <Link to="/settings" className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-100 hover:bg-neutral-50 transition-all">
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-md">
                    <Settings className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-neutral-900">Settings</span>
                </Link>
                <Link to="/profile" className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-100 hover:bg-neutral-50 transition-all">
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-md">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-neutral-900">My Profile</span>
                </Link>
                {/* logout */}
                <Link to="/logout" className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-100 hover:bg-neutral-50 transition-all">
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-md">
                    <LogOut className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-neutral-900">Logout</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="p-8 border-t border-neutral-50">
            <Link to="/settings" className="flex items-center gap-3 text-sm font-black text-neutral-400 uppercase tracking-widest hover:text-[#EE8C2B] transition-colors">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
