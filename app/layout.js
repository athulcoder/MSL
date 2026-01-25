import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const viewport = {
  width: 1200,
  initialScale: 0.4,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MITS Super League",
    template: "%s | MITS Super League",
  },

  description:
    "Official MITS Super League website by Muthoot Institute of Technology and Science. View live standings, fixtures, results, and team statistics.",

  keywords: [
    "MITS Super League",
    "Muthoot Institute of Technology and Science",
    "MITS Football",
    "MITS Sports",
    "College Football League",
    "Indian College Football",
    "Campus Sports League",
    "Football Standings",
    "MITS Tournament",
  ],

  authors: [
    { name: "MITS Sports Committee" },
    { name: "Muthoot Institute of Technology and Science" },
  ],

  creator: "Muthoot Institute of Technology and Science",
  publisher: "MITS",

  openGraph: {
    title: "MITS Super League",
    description:
      "Follow official standings, fixtures, and results of the MITS Super League by Muthoot Institute of Technology and Science.",

    url: "https://mitssuperleague.vercel.app",

    siteName: "MITS Super League",

    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "MITS Super League Logo",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "MITS Super League",

    description:
      "Live updates and standings of MITS Super League — Muthoot Institute of Technology and Science.",

    images: ["/logo.png"],
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

  category: "Sports",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
