"use client";

import * as React from "react";
import { useTranslations } from 'next-intl';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, University } from "lucide-react";
import { Link } from '@/navigation';

export function MobileNav() {
    const [open, setOpen] = React.useState(false);
    const t = useTranslations('Navbar');
    
    const mainNav = [
        { title: t('studyInBelarus'), href: "/study-in-belarus" },
        { title: t('media'), href: "/media" },
        { title: t('visaServices'), href: "/visa-services" },
        { title: t('dubaiVisa'), href: "/dubai-visa" },
        { title: t('about'), href: "/about" },
        { title: t('contact'), href: "/contact" },
    ];


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
                            <Link href="/contact" onClick={() => setOpen(false)}>{t('applyNow')}</Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
