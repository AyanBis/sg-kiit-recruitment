import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Grind KIIT | Build. Lead. Create Impact.",
  description: "Startup Grind KIIT is a student-led community at KIIT University bringing together founders, innovators, creators and builders through events, workshops, conversations and real-world experiences.",
  keywords: "Startup Grind, KIIT, entrepreneurship, student community, innovation, startups, founders, KIIT Bhubaneswar",
  openGraph: {
    title: "Startup Grind KIIT | Build. Lead. Create Impact.",
    description: "A student-led community at KIIT University for founders, innovators, creators and builders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
