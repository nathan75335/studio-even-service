"use client";
import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const AnimateOnScroll = ({ children, className, ...props }: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
        observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
