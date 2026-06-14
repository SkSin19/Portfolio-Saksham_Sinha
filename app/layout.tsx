import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saksham Sinha — Full-Stack Developer & Technical Executive",
  description:
    "Portfolio of Saksham Sinha — B.Tech CS student at KIIT Bhubaneswar (CGPA 8.39), Full-Stack Developer, and Technical Executive at KIIT E-Cell. Building web & mobile apps with Next.js, React Native, Node.js, and MongoDB.",
  keywords: [
    "Saksham Sinha",
    "Full Stack Developer",
    "KIIT",
    "React Native",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Saksham Sinha" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
