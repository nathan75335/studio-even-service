
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { studentMedia } from "@/lib/data";
import { MediaItem } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { MediaModal } from "@/components/media-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useTranslations } from "next-intl";

const MediaGrid = ({ items }: { items: MediaItem[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, index) => {
                const image = PlaceHolderImages.find(p => p.id === item.id);
                if (!image) return null;

                return (
                  <AnimateOnScroll key={item.id} className={`animation-delay-${index*100}`}>
                    <MediaModal mediaItem={item} image={image}>
                        <Card className="overflow-hidden group cursor-pointer h-full">
                            <CardContent className="p-0 relative">
                                <Image
                                    src={image.imageUrl}
                                    alt={item.description}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={image.imageHint}
                                />
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-colors" />
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-semibold">{item.description}</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {item.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </MediaModal>
                  </AnimateOnScroll>
                );
            })}
        </div>
    );
};

export default function MediaPage() {
    const allMedia = [
        ...studentMedia.gallery,
        ...studentMedia.testimonials,
        ...studentMedia.arrivals,
        ...studentMedia.graduations,
        ...studentMedia.campusLife,
    ];

    const allVideos = allMedia.filter(item => item.type === 'video');
    const allPhotos = allMedia.filter(item => item.type === 'photo');
    const t = useTranslations('MediaPage');
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');


    return (
        <div className="bg-background">
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 text-center">
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
                <div className="container mx-auto px-4 text-center relative">
                  <AnimateOnScroll>
                    <h1 className="text-4xl md:text-6xl font-bold font-headline text-white mb-4">{t('heroTitle')}</h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        {t('heroSubtitle')}
                    </p>
                  </AnimateOnScroll>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16">
                <Tabs defaultValue="all" className="w-full">
                    <AnimateOnScroll>
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 md:w-fit mx-auto h-auto md:h-10">
                            <TabsTrigger value="all">{t('tabAll')}</TabsTrigger>
                            <TabsTrigger value="photos">{t('tabPhotos')}</TabsTrigger>
                            <TabsTrigger value="videos">{t('tabVideos')}</TabsTrigger>
                            <TabsTrigger value="testimonials">{t('tabTestimonials')}</TabsTrigger>
                        </TabsList>
                    </AnimateOnScroll>
                    
                    <TabsContent value="all" className="mt-10">
                        <MediaGrid items={allMedia} />
                    </TabsContent>
                    <TabsContent value="photos" className="mt-10">
                         <MediaGrid items={allPhotos} />
                    </TabsContent>
                    <TabsContent value="videos" className="mt-10">
                        <MediaGrid items={allVideos} />
                    </TabsContent>
                    <TabsContent value="testimonials" className="mt-10">
                        <MediaGrid items={studentMedia.testimonials} />
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
