import "./globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import { flex , roboto_flex} from "@/components/fonts/fonts";
import LenisScrollContainer from "@/app/hooks/lenis";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata = {
  title: {
    template: '%s | Hotel Serena Heaven',
    default: 'Hotel Serena Heaven | Luxury Hotel in Newark', // a default is required when creating a template
  },
  description:
    "Hotel Serena Heaven — a boutique luxury hotel in Newark offering elegant rooms and suites, fine dining, spa services, and versatile event spaces.",
  keywords: [
    "hotel",
    "Newark hotel",
    "luxury hotel",
    "boutique hotel",
    "accommodation",
    "rooms",
    "suites",
    "spa",
    "dining",
    "events",
    "weddings",
    "business travel",
    "hospitality",
    "booking",
    "travel",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hotelserenaheaven.com",
    title: "Hotel Serena Heaven | Luxury Hotel in Newark",
    description:
      "Experience refined comfort at Hotel Serena Heaven in Newark — luxury rooms, signature dining, serene spa, and premier venues for events.",
    siteName: "Hotel Serena Heaven",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Serena Heaven | Luxury Hotel in Newark",
    description:
      "Stay at Hotel Serena Heaven — boutique luxury, exceptional service, dining, spa, and event spaces in Newark.",
    creator: "@HotelSerenaHeaven",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          href="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${roboto_flex .className} font-sans antialiased  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LenisScrollContainer>
            <div className="flex min-h-screen flex-col">
              {children}
            </div>
  
          </LenisScrollContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
