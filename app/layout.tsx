import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saksham Sinha - Portfolio",
  description:
    "Portfolio of Saksham Sinha - B.Tech CS student at KIIT Bhubaneswar (CGPA 8.39), Full-Stack Developer, and Technical Executive at KIIT E-Cell. Building web & mobile apps with Next.js, React Native, Node.js, and MongoDB.",
  keywords: [
    "Saksham Sinha",
    "Full Stack Developer",
    "KIIT",
    "React Native",
    "Next.js",
    "Portfolio",
    "Saksham sinha portfolio"
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
      className={`${geistSans.variable} ${serif.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
