import '../index.css';

export const metadata = {
  title: 'Portfolio App',
  description: 'Book Cover Design Portfolio',
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
