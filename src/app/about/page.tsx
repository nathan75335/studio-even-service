import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function AboutPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');

    const stats = [
        { icon: <Users className="w-8 h-8 text-primary" />, value: "500+", label: "Students Helped" },
        { icon: <Award className="w-8 h-8 text-primary" />, value: "98%", label: "Visa Success Rate" },
        { icon: <TrendingUp className="w-8 h-8 text-primary" />, value: "10+", label: "Years of Experience" },
        { icon: <Target className="w-8 h-8 text-primary" />, value: "20+", label: "Partner Universities" },
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
                        <div className="absolute inset-0 bg-primary/80" />
                    </div>
                )}
                <div className="container mx-auto px-4 relative">
                    <AnimateOnScroll>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary-foreground mb-4">About Evan's Travel</h1>
                        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                            Your dedicated partner in navigating the journey to international education and global opportunities.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <AnimateOnScroll>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Who We Are</h2>
                                <p className="text-muted-foreground text-lg">
                                    Evan's Travel is more than just a consultancy agency; we are a team of passionate professionals dedicated to helping students achieve their academic dreams. Founded on the principles of trust, transparency, and personalized support, we have been a guiding light for hundreds of students on their path to studying in Belarus and beyond.
                                </p>
                                <p className="text-muted-foreground text-lg">
                                    Our experience in the education sector allows us to provide expert advice and seamless processing for admissions, visas, and relocation.
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
                                    <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
                                </div>
                                <p className="text-muted-foreground text-lg pl-16">To simplify the complex process of studying abroad by providing transparent, reliable, and comprehensive support to every student.</p>
                             </div>
                             <div className="space-y-4 mt-8">
                                <div className="flex items-center gap-4">
                                     <div className="bg-primary/10 p-3 rounded-full"><Award className="w-6 h-6 text-primary"/></div>
                                    <h3 className="text-2xl font-bold font-headline">Our Values</h3>
                                </div>
                                <ul className="pl-16 space-y-2 text-muted-foreground text-lg list-disc list-inside">
                                    <li><strong>Trust:</strong> Building lasting relationships based on honesty.</li>
                                    <li><strong>Excellence:</strong> Striving for the highest quality in our services.</li>
                                    <li><strong>Support:</strong> Being there for our students every step of the way.</li>
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
        </div>
    );
}
