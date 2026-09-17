import type { Metadata } from "next";
import { Poppins, Tektur } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jeffrey's Portfolio",
  description:
    "Inspiring Full Stack Web Developer specializing in PHP (Laravel), JavaScript, MySQL, and modern CSS frameworks.",
  icons: {
    icon: "/images/lg.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${tektur.variable}`}>
      <body>{children}</body>
    </html>
  );
}
