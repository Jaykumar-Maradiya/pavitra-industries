'use client';

import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

interface ProductBreadcrumbProps {
  title: string;
}

export function ProductBreadcrumb({ title }: ProductBreadcrumbProps) {
  return (
    <div className="border-b border-neutral-200 bg-neutral-100/60 py-3 text-xs md:text-sm">
      <div className="site-container flex items-center space-x-2 text-neutral-600">
        <Link
          href="/"
          className="flex items-center gap-1.5 transition-colors hover:text-black focus:outline-none focus:ring-1 focus:ring-black"
          aria-label="Home"
        >
          <Home className="h-3.5 w-3.5 shrink-0" />
          <span className="font-medium">Home</span>
        </Link>
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
        <span className="truncate font-semibold text-neutral-900">{title}</span>
      </div>
    </div>
  );
}
