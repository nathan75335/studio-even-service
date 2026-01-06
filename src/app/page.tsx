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
import { ArrowRight, Plane, PlayCircle, CheckCircle, GraduationCap, Building, Computer, Globe } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { universitiesByField } from '@/lib/data';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { SuitcaseIcon } from '@/components/icons';

const featuredUniversities = [
  ...universitiesByField.medicine.universities.slice(0, 1),
  ...universitiesByField.it.universities.slice(0, 1),
  ...universitiesByField.engineering.universities.slice(0, 1),
  ...universitiesByField.business.universities.slice(0, 1),
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
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary"><path d="M12.57 2.43A14.12 14.12 0 0 0 10 2a13.34 13.34 0 0 0-4 1.57c-3.11 1.6-4.4 4.58-4.8 7.3A15.8 15.8 0 0 0 2 14a13.34 13.34 0 0 0 4 5.43c3.11 1.6 7.4 1.6 10.51 0a13.34 13.34 0 0 0 4-5.43 15.8 15.8 0 0 0-.2-3.7c-.4-2.72-1.69-5.7-4.8-7.3Z"/><path d="M8.5 19.5 10 16l1.5 3.5"/><path d="m8 12 1.5 2 1.5-2"/><path d="M12 22v-2"/><path d="M12 4V2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>, title: "Dubai Visa Services", description: "Fast and reliable visa assistance for your travel and business needs in Dubai." },
                { icon: <SuitcaseIcon className="w-10 h-10 text-primary" />, title: "Travel & Relocation", description: "Comprehensive support for airport pickup, accommodation, and settling in." }
              ].map((service, index) => (
                <AnimateOnScroll key={service.title} className={`animation-delay-${index * 100}`}>
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Featured Universities</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                We partner with leading institutions in Belarus to offer you the best in education across multiple disciplines.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredUniversities.map((uni, index) => {
                const uniImage = PlaceHolderImages.find(p => p.id === uni.image);
                const fieldInfo = Object.values(universitiesByField).find(f => f.universities.some(u => u.name === uni.name));
                return (
                  <AnimateOnScroll key={uni.name} className={`animation-delay-${index * 100}`}>
                    <Card className="overflow-hidden group h-full flex flex-col">
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
                        <h3 className="font-bold">{uni.name}</h3>
                        {fieldInfo && (
                          <p className="text-sm text-muted-foreground mt-1">{fieldInfo.name}</p>
                        )}
                      </CardContent>
                      <CardContent className="p-4 pt-0">
                         <Button asChild variant="secondary" size="sm" className="group/button">
                            <Link href="/study-in-belarus">Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform" /></Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
             <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/study-in-belarus">Explore All Universities</Link>
                </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Start Your Journey?</h2>
              <p className="max-w-2xl mx-auto text-lg text-primary-foreground/90 mb-8">
                Let us handle the details while you prepare for the adventure of a lifetime. Contact us today for a free consultation.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
    </div>
  );
}
