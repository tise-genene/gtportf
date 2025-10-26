import "./globals.css";
import "./mono-theme.css";
import Navbar from "./components/Navbar";
import { seo } from "@/data/data";
import Footer from "./components/Footer";

export const metadata = {
  title: `${seo.title}`,
  icons: {
    // use a transparent tiny inline favicon so no avatar appears in the tab
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect width='100%25' height='100%25' fill='transparent'/%3E%3C/svg%3E",
      },
    ],
  },
  description: `${seo.description}`,
  keywords: `${seo.keywords}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* transparent favicon (data URI) so no avatar appears in the browser tab */}
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect width='100%25' height='100%25' fill='transparent'/%3E%3C/svg%3E"
          type="image/svg+xml"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        ></link>
        {/* Theme is dark-by-default on the server (see mono-theme.css).
            Client code (Navbar) will read localStorage / prefers-color-scheme
            and update `data-theme` after hydration. Removing the pre-hydration
            script prevents client DOM mutations before React hydrates and
            avoids hydration mismatches. */}
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
