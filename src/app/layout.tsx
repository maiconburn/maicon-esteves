import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maicon Ribeiro Esteves - Portfolio",
  description:
    "Software Engineer with a focus on React and Next.js and a passion for growth hacking.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: "Maicon Ribeiro Esteves - Portfolio",
    description:
      "Explore Maicon's portfolio showcasing his work as a software engineer with expertise in React, Next.js, and growth hacking strategies.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maicon Ribeiro Esteves - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maicon Ribeiro Esteves - Portfolio",
    description:
      "Explore Maicon's portfolio showcasing his work as a software engineer with expertise in React, Next.js, and growth hacking strategies.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
