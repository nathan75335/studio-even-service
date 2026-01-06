import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { universitiesByField, requiredDocuments } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, FileText } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useTranslations } from "next-intl";

const AnimatedChecklist = ({ title, items }: { title: string, items: { item: string }[] }) => (
    <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold font-headline mb-4 flex items-center"><FileText className="w-5 h-5 mr-2 text-primary"/>{title}</h3>
        <ul className="space-y-3">
            {items.map((doc, index) => (
                <li key={index} className="flex items-start gap-3 transition-opacity duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <span>{doc.item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default function StudyInBelarusPage() {
    const fields = Object.values(universitiesByField);
    const t = useTranslations('StudyBelarusPage');

    return (
        <div>
            <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-card">
                <div className="container mx-auto px-4 text-center">
                    <AnimateOnScroll>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground mb-4">{t('heroTitle')}</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t('heroSubtitle')}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <main className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue={fields[0].name} className="w-full">
                        <AnimateOnScroll>
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto md:h-10">
                                {fields.map(field => (
                                    <TabsTrigger key={field.name} value={field.name}>{field.name}</TabsTrigger>
                                ))}
                            </TabsList>
                        </AnimateOnScroll>

                        {fields.map(field => (
                            <TabsContent key={field.name} value={field.name} className="mt-10">
                                <AnimateOnScroll>
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold font-headline">{field.name}</h2>
                                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{field.description}</p>
                                    </div>
                                </AnimateOnScroll>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {field.universities.map((uni, index) => {
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
                                                    </CardContent>
                                                    <CardFooter className="p-4 pt-0">
                                                        <Button asChild variant="outline" size="sm">
                                                          <Link href="/contact">{t('inquireNow')}</Link>
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            </AnimateOnScroll>
                                        );
                                    })}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </main>

            <section id="required-documents" className="py-16 md:py-24 bg-card">
                 <div className="container mx-auto px-4">
                    <AnimateOnScroll>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">{t('documentsTitle')}</h2>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <AnimateOnScroll>
                           <AnimatedChecklist title={t('admissionDocsTitle')} items={requiredDocuments.admission} />
                        </AnimateOnScroll>
                        <AnimateOnScroll className="animation-delay-200">
                           <AnimatedChecklist title={t('visaDocsTitle')} items={requiredDocuments.visa} />
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
}
