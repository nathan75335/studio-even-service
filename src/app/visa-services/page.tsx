import Image from "next/image";
import { belarusVisaSteps } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function VisaServicesPage() {
    return (
        <div>
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-primary/10 text-center">
                <div className="container mx-auto px-4 relative">
                    <AnimateOnScroll>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground mb-4">Belarus Student Visa</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            A clear and streamlined process to secure your student visa. Let us guide you every step of the way.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <AnimateOnScroll>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Your Visa Journey in 4 Simple Steps</h2>
                    </AnimateOnScroll>
                    
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-1 bg-border rounded-full md:block hidden"></div>
                        {belarusVisaSteps.map((step, index) => (
                            <AnimateOnScroll key={step.step} className="relative mb-12">
                                <div className="md:flex items-center md:even:flex-row-reverse">
                                    <div className="md:w-1/2 md:pr-8 md:even:pr-0 md:even:pl-8">
                                        <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mr-4">
                                                    {step.step}
                                                </div>
                                                <h3 className="text-2xl font-bold font-headline">{step.title}</h3>
                                            </div>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 hidden md:block">
                                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-8 ring-background">
                                            <Check className="w-6 h-6"/>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <AnimateOnScroll>
                             <Image 
                                src="https://picsum.photos/seed/visa2/600/400"
                                alt="Student holding passport"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full"
                                data-ai-hint="student passport"
                            />
                        </AnimateOnScroll>
                        <AnimateOnScroll className="animation-delay-200">
                             <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Why Trust Us With Your Visa?</h2>
                            <ul className="space-y-4 text-muted-foreground text-lg">
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-6 h-6 text-primary mt-1 shrink-0"/>
                                    <span><strong>Up-to-date Information:</strong> We stay current with the latest embassy requirements and procedures.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-6 h-6 text-primary mt-1 shrink-0"/>
                                    <span><strong>Document Verification:</strong> We meticulously check all documents to prevent common errors and delays.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-6 h-6 text-primary mt-1 shrink-0"/>
                                    <span><strong>Full Support:</strong> From filling forms to preparing for the interview, we're with you all the way.</span>
                                </li>
                            </ul>
                            <Button asChild size="lg" className="mt-8">
                                <Link href="/contact">Start Your Application</Link>
                            </Button>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
}
