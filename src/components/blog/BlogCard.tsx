'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { img } from '@/data/site-data';

export type BlogPostItem = {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  index: number;
};

export function BlogCard({ post }: { post: BlogPostItem }) {
  return (
    <motion.article
      className="group flex flex-col justify-between rounded-md border border-neutral-200 bg-white shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: post.index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div>
        {/* Featured Image Container */}
        {post.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-neutral-200">
            <Link href={post.slug} className="block h-full w-full">
              <img
                src={img(post.image)}
                alt={post.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
        ) : (
          <div className="relative aspect-[16/10] w-full flex items-center justify-center bg-neutral-900 border-b border-neutral-800 text-white p-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white mb-2 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                Pavitra Journal • 0{post.index + 1}
              </span>
            </div>
          </div>
        )}

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <h2 className="text-lg sm:text-xl font-extrabold text-black leading-snug group-hover:text-neutral-700 transition-colors line-clamp-3">
            <Link href={post.slug} className="hover:underline">
              {post.title}
            </Link>
          </h2>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600 line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer / Action */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
        <Link
          href={post.slug}
          data-testid={`link-blog-post-${post.index}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:text-neutral-600 transition-colors"
        >
          <span>Read Full Article</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
