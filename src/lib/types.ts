import type { LucideIcon } from "lucide-react";

export type University = {
  name: string;
  image: string;
  field: string;
  gallery: string[];
  videos: string[];
};

export type FieldOfStudy = {
  name: string;
  description: string;
  universities: University[];
};

export type DocumentItem = {
    item: string;
};

export type VisaStep = {
    step: number;
    title: string;
    description: string;
};

export type DubaiVisaType = {
    title: string;
    description: string;
    icon: string;
};

export type MediaItem = {
    id: string;
    type: 'video' | 'photo';
    description: string;
    tags: string[];
};
