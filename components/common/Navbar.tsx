"use client";

import clsx from "clsx";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import { navLinks } from "@/lib/placeholder_data";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setISLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        `fixed top-0 z-50 w-full transition-all duration-200 p-3 bg-stone-300 `,
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="">
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2  transition-colors hover:text-accent text-stone-400",
                  pathname === link.href
                    ? "text-accent font-medium"
                    : "text-foreground/80",
                  !isLoggedIn && link.secure
                    ? "lg:hidden"
                    : link.size === "sm"
                      ? "hidden lg:inline-block text-base rounded-md"
                      : "inline-block text-lg font-semibold",
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild size="sm" className="ml-4">
              <Link href="/contact" className="text-stone-400 text-base">
                Contact
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 outline-none"
                >
                  <Menu
                    className={clsx(`ml-2 outline-none h-5 w-5`, {
                      hidden: isMobileMenuOpen == true,
                    })}
                  />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-3 py-2 text-lg rounded-md transition-colors text-stone-400 ${
                        pathname === link.href
                          ? "text-accent font-medium"
                          : "text-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 ">
                    <Link
                      href="/contact"
                      className="text-stone-400 text-base"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
