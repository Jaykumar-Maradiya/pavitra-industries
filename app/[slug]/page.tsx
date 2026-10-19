import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteRoute } from '@/App';
import { createRouteMetadata, findSiteRoute, staticRouteSlugs } from '@/site-routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return staticRouteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = findSiteRoute(slug);
  return route ? createRouteMetadata(route) : {};
}

export default async function SitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!findSiteRoute(slug)) notFound();
  return <SiteRoute slug={slug} />;
}