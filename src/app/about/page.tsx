import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useTranslations } from "next-intl";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');
    const t = useTranslations('AboutPage');

    const stats = [
        { icon: <Users className="w-8 h-8 text-primary" />, value: "500+", label: t('statsStudents') },
        { icon: <Award className="w-8 h-8 text-primary" />, value: "98%", label: t('statsSuccess') },
        { icon: <TrendingUp className="w-8 h-8 text-primary" />, value: "10+", label: t('statsExperience') },
        { icon: <Target className="w-8 h-8 text-primary" />, value: "20+", label: t('statsPartners') },
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
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <AnimateOnScroll>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">{t('whoWeAreTitle')}</h2>
                                <p className="text-muted-foreground text-lg">
                                    {t('whoWeAreText1')}
                                </p>
                                <p className="text-muted-foreground text-lg">
                                    {t('whoWeAreText2')}
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll className="animation-delay-200">
                             <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-card p-6 rounded-lg shadow-sm text-center">
                                        {stat.icon}
                                        <p className="text-3xl font-bold mt-2">{stat.value}</p>
                                        <p className="text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <AnimateOnScroll className="order-2 md:order-1">
                             <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full"><Target className="w-6 h-6 text-primary"/></div>
                                    <h3 className="text-2xl font-bold font-headline">{t('missionTitle')}</h3>
                                </div>
                                <p className="text-muted-foreground text-lg pl-16">{t('missionText')}</p>
                             </div>
                             <div className="space-y-4 mt-8">
                                <div className="flex items-center gap-4">
                                     <div className="bg-primary/10 p-3 rounded-full"><Award className="w-6 h-6 text-primary"/></div>
                                    <h3 className="text-2xl font-bold font-headline">{t('valuesTitle')}</h3>
                                </div>
                                <ul className="pl-16 space-y-2 text-muted-foreground text-lg list-disc list-inside">
                                    <li>{t('valueTrust')}</li>
                                    <li>{t('valueExcellence')}</li>
                                    <li>{t('valueSupport')}</li>
                                </ul>
                             </div>
                        </AnimateOnScroll>
                         <AnimateOnScroll className="order-1 md:order-2 animation-delay-200">
                             <Image 
                                src="https://picsum.photos/seed/about2/600/600"
                                alt="Students celebrating"
                                width={600}
                                height={600}
                                className="rounded-lg shadow-lg w-full"
                                data-ai-hint="students celebrating"
                            />
                        </AnimateOnScroll>
                     </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <AnimateOnScroll>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">{t('ctaTitle')}</h2>
                        <p className="max-w-2xl mx-auto text-lg text-primary-foreground/90 mb-8">
                           {t('ctaSubtitle')}
                        </p>
                        <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">
                                {t('getInTouch')}
                            </Link>
                        </Button>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    );
}
