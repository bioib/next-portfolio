import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Foreynd Blog | Tech Insights & Full-Stack Development",
  description:
    "Explore Fabio Reva Yanda's blog for tutorials, insights, and tips on full-stack development, Next.js, TypeScript, Node.js, MongoDB, and more.",
  keywords: [
    "tech blog",
    "full-stack development",
    "Next.js tutorials",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "MySQL",
    "WordPress",
    "web development",
    "coding tutorials",
    "developer portfolio",
  ],
  authors: [{ name: "Fabio Reva Yanda", url: "https://foreynd.space" }],
  creator: "Fabio Reva Yanda",
  publisher: "Fabio Reva Yanda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Foreynd Blog | Fabio Reva Yanda",
    description:
      "Dive into Fabio Reva Yanda's tech blog for expert insights on full-stack development, featuring tutorials on Next.js, TypeScript, Node.js, and more.",
    url: "https://foreynd.space/blog",
    siteName: "Foreynd Blog",
    images: [
      {
        url: "https://foreynd.space/images/blog-og-image.jpg", // Ganti dengan URL gambar spesifik untuk blog
        width: 1200,
        height: 630,
        alt: "Foreynd Blog - Full-Stack Development Tutorials",
      },
    ],
    locale: "id_ID", // Diubah ke id_ID untuk audiens Indonesia
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreynd Blog | Full-Stack Development",
    description:
      "Join Fabio Reva Yanda's blog for the latest tutorials and insights on Next.js, TypeScript, Node.js, and full-stack development.",
    images: ["https://foreynd.space/images/blog-og-image.jpg"], // Ganti dengan URL gambar spesifik
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false, // Ubah ke true jika tidak ingin halaman di-cache
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://foreynd.space/blog",
    languages: {
      "id-ID": "https://foreynd.space/blog/id",
      "en-US": "https://foreynd.space/blog/en", // Tambahkan jika blog mendukung multi-bahasa
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-ctp-base text-ctp-text antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
