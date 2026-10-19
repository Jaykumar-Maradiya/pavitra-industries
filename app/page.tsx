import type { Metadata } from 'next';
import { SiteRoute } from '@/App';
import { createRouteMetadata, findSiteRoute } from '@/site-routes';

export const metadata: Metadata = createRouteMetadata(findSiteRoute('')!);

export default function HomePage() {
  return <SiteRoute slug="" />;
}