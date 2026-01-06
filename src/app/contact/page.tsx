import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Phone, Mail, MapPin, Building } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');
    const whatsappLink = "https://wa.me/375257458438";
    const t = useTranslations('ContactPage');

    return (
        <div>
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-card text-center">
                {heroImage && (
                    <div className="absolute inset-0">
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-primary/80" />
                    </div>
                )}
                <div className="container mx-auto px-4 relative">
                    <AnimateOnScroll>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary-foreground mb-4">{t('heroTitle')}</h1>
                        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                            {t('heroSubtitle')}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimateOnScroll className="lg:col-span-1">
                            <div className="bg-card p-8 rounded-lg shadow-md h-full">
                                <h2 className="text-2xl font-bold font-headline mb-6">{t('contactInfoTitle')}</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full"><Phone className="w-6 h-6 text-primary"/></div>
                                        <div>
                                            <h3 className="font-semibold">{t('phone')}</h3>
                                            <a href="tel:+375257458438" className="text-muted-foreground hover:text-primary">+375 25 74 58 438</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full"><Mail className="w-6 h-6 text-primary"/></div>
                                        <div>
                                            <h3 className="font-semibold">{t('email')}</h3>
                                            <a href="mailto:info@evanstravel.com" className="text-muted-foreground hover:text-primary">info@evanstravel.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full"><MapPin className="w-6 h-6 text-primary"/></div>
                                        <div>
                                            <h3 className="font-semibold">{t('address')}</h3>
                                            <p className="text-muted-foreground">Minsk, Belarus</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full"><Building className="w-6 h-6 text-primary"/></div>
                                        <div>
                                            <h3 className="font-semibold">{t('officeHours')}</h3>
                                            <p className="text-muted-foreground">{t('officeHoursValue')}</p>
                                        </div>
                                    </div>
                                </div>
                                <Button asChild className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white">
                                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                        <WhatsAppIcon className="w-5 h-5 mr-2" />
                                        {t('whatsapp')}
                                    </Link>
                                </Button>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll className="md:col-span-2 lg:col-span-2 animation-delay-200">
                             <div className="bg-card p-8 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold font-headline mb-6">{t('formTitle')}</h2>
                                <ContactForm />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
}
