"use client";

import * as React from "react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, University } from "lucide-react";

const mainNav = [
    { title: "Study in Belarus", href: "/study-in-belarus" },
    { title: "Media", href: "/media" },
    { title: "Visa Services", href: "/visa-services" },
    { title: "Dubai Visa", href: "/dubai-visa" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

export function MobileNav() {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col h-full py-6">
                    <Link href="/" className="flex items-center mb-8" onClick={() => setOpen(false)}>
                         <University className="h-6 w-6 mr-2" />
                        <span className="font-bold text-lg font-headline">Evan's Travel</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                        {mainNav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-lg font-medium text-muted-foreground hover:text-foreground"
                                onClick={() => setOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-auto">
                        <Button asChild className="w-full">
                            <Link href="/contact" onClick={() => setOpen(false)}>Apply Now</Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
