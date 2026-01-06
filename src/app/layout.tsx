import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import {getLocale} from 'next-intl/server';


export const metadata: Metadata = {
  title: "Evan's Travel - Study in Belarus, Visa Assistance",
  description: 'Your trusted partner for education and travel. We specialize in helping students study in Belarus and provide comprehensive visa services for Belarus and Dubai.',
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();
  const messages = useMessages();
  
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
