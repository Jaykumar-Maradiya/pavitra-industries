'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Shell } from '@/components/Shell';
import { PageHero } from '@/components/PageHero';
import { type ArticleData, img } from '@/data/site-data';

export function Article({ article }: { article: ArticleData }) {
  return (
    <>
      <Seo title={article.title} description={article.blocks[0]?.paragraphs?.[0] || article.title} />
      <Shell>
        <main id="content">
          <PageHero label="Pavitra Journal" title={article.title} image={article.image} />
          <article className="site-container max-w-3xl py-16 md:py-24">
            {article.image && (
              <img src={img(article.image)} alt="" className="mb-12 max-h-[480px] w-full object-cover" />
            )}
            {article.blocks.map((block) => (
              <section key={block.heading} className="mb-12">
                <h2 className="font-serif text-3xl font-semibold">{block.heading}</h2>
                {block.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="body-copy mt-5">
                    {paragraph}
                  </p>
                ))}
                {block.items && (
                  <ul className="mt-6 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#5d5955]">
                        <Check size={17} className="mt-1 shrink-0 text-[#9c0e0e]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {block.specs && (
                  <div className="mt-6 overflow-x-auto border border-[#e6ddd5]">
                    <table className="w-full text-sm">
                      <tbody>
                        {block.specs.map(([key, value]) => (
                          <tr key={key} className="border-b border-[#e6ddd5] last:border-0">
                            <th className="bg-[#fbf4eb] px-4 py-3 text-left">{key}</th>
                            <td className="px-4 py-3">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
            <Link href="/blog/" data-testid="article-back-blog" className="link-arrow">
              Back to blog <ArrowRight size={16} />
            </Link>
          </article>
        </main>
      </Shell>
    </>
  );
}
