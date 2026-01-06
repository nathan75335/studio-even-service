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
import { ArrowRight, Plane, PlayCircle, CheckCircle, GraduationCap, Building, Computer } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { universitiesByField } from '@/lib/data';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { SuitcaseIcon } from '@/components/icons';

const featuredUniversities = [
  ...universitiesByField.medicine.slice(0, 1),
  ...universitiesByField.it.slice(0, 1),
  ...universitiesByField.engineering.slice(0, 1),
  ...universitiesByField.business.slice(0, 1),
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const videoPlaceholders = PlaceHolderImages.filter(p => p.id.startsWith('video-'));

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 text-center bg-card">
          <div className="absolute inset-0 bg-primary/10">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-20"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="relative inline-block">
                <Plane className="absolute -top-8 -left-16 w-16 h-16 text-primary opacity-50 -rotate-12 animate-float" />
                <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-foreground animate-fade-in-down">
                  Study in Belarus
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
                Bachelor’s • Master’s • Visa Assistance
              </p>
              <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-300">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Apply Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
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
                Your Journey Starts With Evan’s Travel
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll className="animation-delay-200">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Our Core Services</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                We provide comprehensive support for your educational and travel aspirations, from university applications to visa processing.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <GraduationCap className="w-10 h-10 text-primary" />, title: "University Admission", description: "Expert guidance to secure your spot in top Belarusian universities." },
                { icon: <Plane className="w-10 h-10 text-primary" />, title: "Student Visa for Belarus", description: "Streamlined visa processing to ensure a smooth start to your studies." },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary"><path d="M12.57 2.43A14.12 14.12 0 0 0 10 2a13.34 13.34 0 0 0-4 1.57c-3.11 1.6-4.4 4.58-4.8 7.3A15.8 15.8 0 0 0 2 14a13.34 13.34 0 0 0 1.57 4c1.6 3.11 4.58 4.4 7.3 4.8A15.8 15.8 0 0 0 14 22a13.34 13.34 0 0 0 4-1.57c3.11-1.6 4.4-4.58 4.8-7.3A15.8 15.8 0 0 0 22 10a13.34 13.34 0 0 0-1.57-4c-1.02-1.98-2.6-3.48-4.43-4.43" /><path d="M12 6v1" /><path d="M12 11v1" /><path d="M12 16v1" /></svg>, title: "Visas for Dubai", description: "Fast and reliable processing for all types of Dubai visas." },
                { icon: <SuitcaseIcon className="w-10 h-10 text-primary" />, title: "Travel &amp; Relocation", description: "Complete support for your journey, from airport pickup to accommodation." },
              ].map((service, index) => (
                <AnimateOnScroll key={index} className={`animation-delay-${index * 100}`}>
                  <Card className="text-center h-full hover:shadow-lg transition-shadow hover:-translate-y-1">
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4 w-fit">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
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

        <section id="featured-universities" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Featured Universities</h2>
            </AnimateOnScroll>
            <AnimateOnScroll className="animation-delay-200">
            <Carousel
                opts={{ align: 'start', loop: true }}
                className="w-full max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {featuredUniversities.map((uni, index) => {
                    const uniImage = PlaceHolderImages.find(p => p.id === uni.image);
                    return(
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-2">
                          <Card className="overflow-hidden group h-full flex flex-col">
                            {uniImage && (
                              <Image
                                src={uniImage.imageUrl}
                                alt={uni.name}
                                width={400}
                                height={250}
                                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={uniImage.imageHint}
                              />
                            )}
                            <CardContent className="p-4 flex-grow flex flex-col">
                              <h3 className="font-bold text-md flex-grow">{uni.name}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{uni.field}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-12" />
                <CarouselNext className="-right-4 md:-right-12" />
              </Carousel>
              </AnimateOnScroll>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/study-in-belarus">
                  View All Universities <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
