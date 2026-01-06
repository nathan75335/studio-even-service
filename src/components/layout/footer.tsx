import Link from "next/link";
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from "@/components/icons";

const quickLinks = [
    { href: '/study-in-belarus', label: 'Study in Belarus' },
    { href: '/visa-services', label: 'Belarus Visa' },
    { href: '/dubai-visa', label: 'Dubai Visa' },
    { href: '/media', label: 'Media' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
];

export function Footer() {
    return (
        <footer className="bg-card border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-headline">Evan's Travel</h3>
                        <p className="text-muted-foreground">Your trusted partner for education and travel consultancy. We turn your study abroad dreams into reality.</p>
                        <div className="flex space-x-4">
                           <a href="https://wa.me/375257458438" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <WhatsAppIcon className="w-6 h-6" />
                           </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 font-headline">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 font-headline">Contact Us</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+375 25 74 58 438</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>info@evanstravel.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-1" />
                                <span>Minsk, Belarus</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-lg mb-4 font-headline">Our Mission</h4>
                        <p className="text-muted-foreground">To provide seamless and reliable assistance for students aspiring to study in Belarus, ensuring a smooth journey from application to arrival.</p>
                    </div>

                </div>

                <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Evan's Travel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
