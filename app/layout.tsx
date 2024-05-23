import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Gospel Movies",
  description: "Movie Streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
