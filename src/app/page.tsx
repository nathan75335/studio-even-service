
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight, Plane, PlayCircle, GraduationCap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { universitiesByField } from '@/lib/data';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { SuitcaseIcon } from '@/components/icons';
import { useTranslations } from 'next-intl';
import Autoplay from "embla-carousel-autoplay";

const featuredUniversities = [
  ...universitiesByField.medicine.universities.slice(0, 1),
  ...universitiesByField.it.universities.slice(0, 1),
  ...universitiesByField.engineering.universities.slice(0, 1),
  ...universitiesByField.business.universities.slice(0, 1),
];

export default function Home() {
  const videoPlaceholders = PlaceHolderImages.filter(p => p.id.startsWith('video-'));
  const t = useTranslations('HomePage');
  const tNav = useTranslations('Navbar');
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 text-center bg-card">
          <div className="absolute inset-0">
             <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full h-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {videoPlaceholders.map((video, index) => (
                    <CarouselItem key={index}>
                        <Image
                          src={video.imageUrl}
                          alt={video.description}
                          fill
                          className="object-cover opacity-20"
                          priority={index === 0}
                          data-ai-hint={video.imageHint}
                        />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
             <div className="absolute inset-0 bg-background/80"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="relative inline-block">
                <Plane className="absolute -top-8 -left-16 w-16 h-16 text-primary opacity-50 -rotate-12 animate-float" />
                <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-foreground animate-fade-in-down">
                  {t('heroTitle')}
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
                {t('heroSubtitle')}
              </p>
              <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-300">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    {tNav('applyNow')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">{t('contactUs')}</Link>
                </Button>
              </div>
              <SuitcaseIcon className="absolute -bottom-12 -right-12 w-20 h-20 text-primary opacity-30 rotate-12 animate-float-delay" />
            </div>
          </div>
        </section>

        <section id="journey" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
                {t('journeyTitle')}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll className="animation-delay-200">
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {videoPlaceholders.map((video, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden group">
                          <CardContent className="p-0 relative">
                            <Image
                              src={video.imageUrl}
                              alt={video.description}
                              width={600}
                              height={400}
                              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={video.imageHint}
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-colors" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-4">
                              <h3 className="text-white font-bold text-lg">{video.description}</h3>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-12" />
                <CarouselNext className="mr-12" />
              </Carousel>
            </AnimateOnScroll>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">{t('servicesTitle')}</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t('servicesSubtitle')}
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <GraduationCap className="w-10 h-10 text-primary" />, title: t('service1Title'), description: t('service1Desc') },
                { icon: <Plane className="w-10 h-10 text-primary" />, title: t('service2Title'), description: t('service2Desc') },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary"><path d="M12.57 2.43A14.12 14.12 0 0 0 10 2a13.34 13.34 0 0 0-4 1.57c-3.11 1.6-4.4 4.58-4.8 7.3A15.8 15.8 0 0 0 2 14a13.34 13.34 0 0 0 4 5.43c-3.11 1.6 7.4 1.6 10.51 0a13.34 13.34" />, title: t('service3Title'), description: t('service3Desc') },
                { icon: <SuitcaseIcon className="w-10 h-10 text-primary" />, title: t('service4Title'), description: t('service4Desc') },
              ].map((service, index) => (
                <AnimateOnScroll key={service.title} className={`animation-delay-${index * 100}`}>
                  <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-headline mt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="universities" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">{t('universitiesTitle')}</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t('universitiesSubtitle')}
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredUniversities.map((uni, index) => {
                const uniImage = PlaceHolderImages.find(p => p.id === uni.image);
                return (
                  <AnimateOnScroll key={uni.name} className={`animation-delay-${index * 100}`}>
                    <Card className="overflow-hidden group h-full flex flex-col hover:shadow-lg transition-shadow">
                      {uniImage && (
                        <Image
                          src={uniImage.imageUrl}
                          alt={uni.name}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={uniImage.imageHint}
                        />
                      )}
                      <CardContent className="p-4 flex-grow">
                        <h3 className="font-bold text-lg">{uni.name}</h3>
                        <p className="text-sm text-muted-foreground">{uni.field}</p>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
            <AnimateOnScroll className="text-center mt-12 animation-delay-400">
              <Button asChild size="lg" variant="outline">
                <Link href="/study-in-belarus">
                  {t('exploreAll')} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimateOnScroll>
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
      </main>
    </div>
  );
}
