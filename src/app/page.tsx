"use client";

import { usePathname, redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function RootPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      redirect('/en');
    }
  }, [pathname]);
  
  // Render nothing or a loading component while redirecting
  return null;
}
