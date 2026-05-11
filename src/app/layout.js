import "./globals.css";
import "./mono-theme.css";
import Navbar from "./components/Navbar";
import { seo } from "@/data/data";
import Footer from "./components/Footer";

export const metadata = {
  title: `${seo.title}`,
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect width='100%25' height='100%25' fill='transparent'/%3E%3C/svg%3E",
      },
    ],
  },
  description: `${seo.description}`,
  keywords: `${seo.keywords}`,
  openGraph: {
    title: `${seo.title}`,
    description: `${seo.description}`,
    type: "website",
    locale: "en_US",
    siteName: "Genene Tise Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: `${seo.title}`,
    description: `${seo.description}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`antialiased overflow-auto`}>
        <div className="w-[100%] md:w-[700px] m-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
