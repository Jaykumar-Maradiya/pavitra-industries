'use client';

import { BlogCard, type BlogPostItem } from './BlogCard';

export function BlogGrid({ posts }: { posts: BlogPostItem[] }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
