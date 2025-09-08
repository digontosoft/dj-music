import logo from "@/assets/images/tmpmmnklel5.webp";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Weddings", href: "/weddings" },
    { name: "Corporate", href: "/corporate" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#101217] border-b border-[#05070A] py-4">
      <div className="customContainer flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          <img src={logo} alt="mdrnsoundlogo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-slate-300 font-sans font-light text-base hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div>
          <Link to="/">
            <Button
              className="bg-[#05070A] border border-slate-600 rounded-full text-lg font-sans font-medium text-blue-700 flex items-center justify-center px-12 py-6"
              style={{ boxShadow: "inset 0 2px 6px rgba(37, 99, 235, 0.5)" }}
            >
              Book A Call With Nate
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-blue-600">MyBrand</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
