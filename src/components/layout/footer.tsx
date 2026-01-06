import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from "@/components/icons";
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export function Footer() {
    const t = useTranslations('Footer');
    const tNav = useTranslations('Navbar');

    const quickLinks = [
        { href: '/study-in-belarus', label: tNav('studyInBelarus') },
        { href: '/visa-services', label: tNav('visaServices') },
        { href: '/dubai-visa', label: tNav('dubaiVisa') },
        { href: '/media', label: tNav('media') },
        { href: '/about', label: tNav('about') },
        { href: '/contact', label: tNav('contact') },
    ];

    return (
        <footer className="bg-card border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-headline">Evan's Travel</h3>
                        <p className="text-muted-foreground">{t('tagline')}</p>
                        <div className="flex space-x-4">
                           <a href="https://wa.me/375257458438" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <WhatsAppIcon className="w-6 h-6" />
                           </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4 font-headline">{t('quickLinks')}</h4>
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
                        <h4 className="font-semibold text-lg mb-4 font-headline">{t('contactUs')}</h4>
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
                        <h4 className="font-semibold text-lg mb-4 font-headline">{t('mission')}</h4>
                        <p className="text-muted-foreground">{t('missionText')}</p>
                    </div>

                </div>

                <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
                    <p>{t('copyright', { year: new Date().getFullYear() })}</p>
                </div>
            </div>
        </footer>
    );
}
