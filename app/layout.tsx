import type {Metadata} from 'next';
import { Space_Grotesk, Inter, Chakra_Petch } from 'next/font/google';
import './globals.css'; // Global styles

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-chakra',
});

export const metadata: Metadata = {
  title: 'Pitch Deck Landing Page',
  description: 'A modern, stylized pitch deck landing page with a technical and editorial aesthetic.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${chakraPetch.variable}`}>
      <body className="font-inter antialiased bg-[#201f1e] text-[#1c1c1c]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
