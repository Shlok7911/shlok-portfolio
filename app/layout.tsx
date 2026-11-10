import type { Metadata, Viewport } from "next";
import { profile } from "@/content/profile";
import "./globals.css";
import "./design-v2.css";
import "./compact.css";

const title = "Shlok Mehroliya — Full-stack engineer";
const description =
  "Frontend architecture for production AI products. Streaming chat, large-scale state, and interfaces that stay fast.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Full-stack engineer",
  email: `mailto:${profile.email}`,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indraprastha Institute of Information Technology Delhi",
  },
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
