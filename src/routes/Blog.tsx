'use client';

import { Seo } from '@/components/Seo';
import { Shell } from '@/components/Shell';
import { BlogHero, BlogGrid, type BlogPostItem } from '@/components/blog';
import { Motor360Viewer } from '@/components/product/Motor360Viewer';

export function Blog() {
  const posts: BlogPostItem[] = [
    {
      slug: '/vibratory-motor-full-guide-to-working-specifications-uses/',
      title: 'Choosing the Best Vibratory Motor Supplier in India: A Closer Look at Pavitra Industries',
      excerpt:
        'Introduction to Pavitra Industries. In the dynamic world of electric motors, Pavitra Industries stands out as a leading manufacturer in India. With a strong commitment to innovation and quality...',
      index: 0,
    },
    {
      slug: '/%f0%9f%8c%9f-what-is-a-vibratory-motor-complete-guide-working-types-applications/',
      title: '🌟 What is a Vibratory Motor? Complete Guide – Working, Types & Applications',
      excerpt:
        '🛠 How Does a Vibratory Motor Work? A vibratory motor works on a simple principle: Eccentric weights are mounted on both ends of the motor shaft. When the shaft rotates, these weights create centrifugal force...',
      image: '2025-11--1000040086-1024x1024.jpg',
      index: 1,
    },
    {
      slug: '/pavitra-industries-indias-leading-manufacturer-of-vibratory-motors-and-equipment/',
      title: 'Pavitra Industries, India’s Leading Manufacturer of Vibratory Motors and Equipment',
      excerpt:
        'Introduction. In today’s rapidly evolving industrial world, efficiency, reliability, and technological innovation are the backbones of progress. For over 15 years, Pavitra Industries has been a symbol of these values...',
      image: '2025-05--pavitra-social-media-8.webp',
      index: 2,
    },
  ];

  return (
    <>
      <Seo
        title="Blog"
        description="Read Pavitra Industries articles on vibratory motors, industrial equipment, working principles, and engineering specifications."
      />
      <Shell>
        <main id="content">
          {/* Blog Hero Banner */}
          <BlogHero />

          {/* 3D CAD Motor View */}
          <div className="site-container my-10 flex justify-center">
            <Motor360Viewer
              spriteSheet="/images/360/induction-motor/motor_3d_spritesheet.webp"
              totalFrames={8}
              alt="Three Phase Induction Motor 3D CAD View"
            />
          </div>

          {/* 3-Column Blog Cards Grid */}
          <BlogGrid posts={posts} />
        </main>
      </Shell>
    </>
  );
}
