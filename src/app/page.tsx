"use client";

import { usePathname, redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function RootPage() {
  const pathname = usePathname();

  useEffect(() => {
    // The pathname for the root is just "/", so we redirect to "/en"
    // All other pages will already have a locale, e.g. /en/about
    if (pathname === '/') {
      redirect('/en');
    }
  }, [pathname]);
  
  // Render nothing or a loading component while redirecting
  return null;
}
