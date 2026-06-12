import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harshith754.github.io"),
  title: {
    default: "Harshith Kunder | Creative Developer",
    template: "%s | Harshith Kunder",
  },
  description:
    "Portfolio of Harshith Kunder, focused on interactive web experiences, motion, physics, and creative engineering.",
  applicationName: "Harshith Kunder Portfolio",
  authors: [{ name: "Harshith Kunder" }],
  creator: "Harshith Kunder",
  keywords: [
    "Harshith Kunder",
    "creative developer",
    "interactive portfolio",
    "Next.js",
    "React",
    "animation",
    "physics simulation",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Harshith Kunder | Creative Developer",
    description:
      "Interactive web experiences, motion, physics, and creative engineering.",
    url: "https://harshith754.github.io",
    siteName: "Harshith Kunder Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Harshith Kunder | Creative Developer",
    description:
      "Interactive web experiences, motion, physics, and creative engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
