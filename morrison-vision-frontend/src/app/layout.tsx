import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Preloader from "@/app/components/preloader";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-2K5GK75EGW"; // Ensure this is your actual GA4 ID

export const metadata: Metadata = {
  title: "Morrison Vision - Capturando Espacios, Creando Experiencias.",
  description: "Capturando Espacios, Creando Experiencias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="pt-25 antialiased">
        <Navbar />
        <Preloader logo="/morrisonvision.jpg" />
        <main className="p-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
