"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { University } from "lucide-react";

const mainNav = [
    { title: "Study in Belarus", href: "/study-in-belarus" },
    { title: "Media", href: "/media" },
    { title: "Visa Services", href: "/visa-services" },
    { title: "Dubai Visa", href: "/dubai-visa" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-card/80 backdrop-blur-sm shadow-md" : "bg-transparent"
        )}>
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <University className="h-6 w-6 text-primary" />
                        <span className="hidden font-bold sm:inline-block font-headline text-lg">
                            Evan's Travel
                        </span>
                    </Link>
                    
                    <nav className="hidden md:flex gap-6">
                        {mainNav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary relative",
                                    pathname === item.href ? "text-primary" : "text-muted-foreground",
                                    "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300",
                                    pathname === item.href ? "after:scale-x-100" : "hover:after:scale-x-50"
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button asChild className="hidden md:flex">
                            <Link href="/contact">Apply Now</Link>
                        </Button>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
