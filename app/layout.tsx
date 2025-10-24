import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Belle Aesthetics & Wellness – Beauty Spa in Lindenhurst, NY",
  description:
    "Belle Aesthetics & Wellness is a premier wellness spa in Lindenhurst, NY offering hydro facials, microneedling, chemical peels, Botox & fillers.",
  keywords:
    "wellness spa, hydro facials, microneedling, chemical peels, Botox, fillers, Lindenhurst, NY",
  openGraph: {
    title: "Belle Aesthetics & Wellness – Beauty Spa in Lindenhurst, NY",
    description:
      "Enhance your natural beauty and wellness with personalized treatments at Belle Aesthetics & Wellness.",
    url: "https://www.belleaesthetics.com",
    siteName: "Belle Aesthetics & Wellness",
    images: ["/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Belle Aesthetics & Wellness",
              image: "https://www.belleaesthetics.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "49 Sunrise Highway",
                addressLocality: "Lindenhurst",
                addressRegion: "NY",
                postalCode: "11757",
                addressCountry: "US",
              },
              telephone: "+1-631-704-9895",
              email: "Fedlenenp@mybelleaesthetics.com",
              url: "https://www.belleaesthetics.com",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
