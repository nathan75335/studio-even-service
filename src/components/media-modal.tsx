"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import type { MediaItem } from "@/lib/types";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Badge } from "./ui/badge";

interface MediaModalProps {
  children: React.ReactNode;
  mediaItem: MediaItem;
  image: ImagePlaceholder;
}

export function MediaModal({ children, mediaItem, image }: MediaModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <div className="relative">
          <Image
            src={image.imageUrl}
            alt={mediaItem.description}
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-t-lg"
            data-ai-hint={image.imageHint}
          />
          {mediaItem.type === "video" && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="w-24 h-24 text-white/80" />
            </div>
          )}
        </div>
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl font-headline">{mediaItem.description}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-2 mt-2">
                {mediaItem.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
