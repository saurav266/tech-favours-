import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://techfavours.com"),

  title: {
    default:
      "TechFavours | Web Development, Cloud, AI & Digital Marketing",
    template: "%s | TechFavours",
  },

  description:
    "TechFavours helps businesses grow with website and app development, custom software, cloud and DevOps, AI automation, UI/UX design, SEO, and digital marketing.",

  applicationName: "TechFavours",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "TechFavours",
    "website development",
    "web application development",
    "custom software development",
    "mobile app development",
    "cloud and DevOps services",
    "AI automation",
    "UI UX design",
    "SEO services",
    "digital marketing",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://techfavours.com/",
    siteName: "TechFavours",
    title: "TechFavours | Ideas. Technology. Real Impact.",
    description:
      "Web development, custom software, cloud, AI automation, and digital growth solutions for businesses.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TechFavours — Ideas. Technology. Real Impact.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TechFavours | Technology Solutions",
    description:
      "Web development, cloud, AI automation, and digital growth solutions for businesses.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}