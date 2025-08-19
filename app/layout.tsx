import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toaster";
import LenisScrollContainer from "@/app/hooks/lenis";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Author & Content Creator",
  description:
    "Award-winning author and content creator specializing in compelling narratives and professional writing services",
  keywords: [
    "author",
    "writer",
    "blog",
    "portfolio",
    "books",
    "writing",
    "content creation",
  ],
  authors: [{ name: "Author Name" }],
  creator: "Author Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hckerson.dev.com",
    title: "Professional Author & Content Creator",
    description:
      "Award-winning author and content creator specializing in compelling narratives and professional writing services",
    siteName: "Author Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Author & Content Creator",
    description:
      "Award-winning author and content creator specializing in compelling narratives and professional writing services",
    creator: "@authorname",
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
        className={`${inter.variable} font-sans antialiased  [&::-webkit-scrollbar]:w-2
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
            <div className="flex min-h-screen flex-col bg-background">
              <Navbar />
              <main className=" ">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LenisScrollContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
