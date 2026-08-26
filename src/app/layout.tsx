import '../index.css';

import '../index.css';

export const metadata = {
  title: 'Sachin Yagol Shrestha',
  description: 'Book Cover Design & Visual Identity — Kathmandu, Nepal',
  openGraph: {
    title: 'Sachin Yagol Shrestha',
    description: 'Book Cover Design & Visual Identity — Kathmandu, Nepal',
    url: 'https://www.sachinyagolshrestha.com.np',
    siteName: 'Sachin Yagol Shrestha',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sachin Yagol Shrestha',
    description: 'Book Cover Design & Visual Identity — Kathmandu, Nepal',
  },
};

import SmoothScroll from '../components/SmoothScroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
