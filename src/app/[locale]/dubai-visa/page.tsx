import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Briefcase, Clock, Calendar, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useTranslations } from "next-intl";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const iconMap: { [key: string]: React.ElementType } = {
  Plane,
  Briefcase,
  Clock,
  Calendar,
};

export default function DubaiVisaPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'dubai-skyline');
    const travelImage1 = PlaceHolderImages.find(p => p.id === 'dubai-travel-1');
    const travelImage2 = PlaceHolderImages.find(p => p.id === 'dubai-travel-2');
    const t = useTranslations('DubaiVisaPage');

    const dubaiVisaTypes = [
        { title: t('touristVisaTitle'), description: t('touristVisaDesc'), icon: 'Plane' },
        { title: t('businessVisaTitle'), description: t('businessVisaDesc'), icon: 'Briefcase' },
        { title: t('shortTermVisaTitle'), description: t('shortTermVisaDesc'), icon: 'Clock' },
        { title: t('longTermVisaTitle'), description: t('longTermVisaDesc'), icon: 'Calendar' },
    ];


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
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                )}
                <div className="container mx-auto px-4 relative">
                    <AnimateOnScroll>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline text-white mb-4">{t('heroTitle')}</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                           {t('heroSubtitle')}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <AnimateOnScroll>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">{t('visaTypesTitle')}</h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            {t('visaTypesSubtitle')}
                        </p>
                    </AnimateOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {dubaiVisaTypes.map((visa, index) => {
                             const IconComponent = iconMap[visa.icon] || Plane;
                             return (
                                <AnimateOnScroll key={visa.title} className={`animation-delay-${index * 100}`}>
                                    <Card className="text-center h-full hover:shadow-xl transition-shadow hover:-translate-y-2 transform duration-300">
                                        <CardHeader>
                                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                                <IconComponent className="w-10 h-10 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl font-headline">{visa.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{visa.description}</p>
                                        </CardContent>
                                    </Card>
                                </AnimateOnScroll>
                             )
                        })}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <AnimateOnScroll>
                            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">{t('whyChooseTitle')}</h2>
                            <ul className="space-y-4 text-muted-foreground text-lg">
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-6 h-6 text-primary mt-1 shrink-0"/>
                                    <span>{t('whyChoosePoint1')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-6 h-6 text-primary mt-1 shrink-0"/>
                                    <span>{t('whyChoosePoint2')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-6 h-6 text-primary mt-1 shrink-0"/>
                                    <span>{t('whyChoosePoint3')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-6 h-6 text-primary mt-1 shrink-0"/>
                                    <span>{t('whyChoosePoint4')}</span>
                                </li>
                            </ul>
                            <Button asChild size="lg" className="mt-8">
                                <Link href="/contact">{t('applyButton')}</Link>
                            </Button>
                        </AnimateOnScroll>
                        <AnimateOnScroll className="animation-delay-200">
                            <div className="grid grid-cols-2 gap-4">
                                {travelImage1 && 
                                    <Image src={travelImage1.imageUrl} alt={travelImage1.description} width={400} height={500} data-ai-hint={travelImage1.imageHint} className="rounded-lg shadow-lg object-cover w-full h-full aspect-[4/5]"/>
                                }
                                {travelImage2 && 
                                    <Image src={travelImage2.imageUrl} alt={travelImage2.description} width={400} height={500} data-ai-hint={travelImage2.imageHint} className="rounded-lg shadow-lg object-cover w-full h-full aspect-[4/5] mt-8"/>
                                }
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
}