import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/ui/nav-bar/NavBar";
import PageHeader from "@/ui/page-header/PageHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Toussaint Thomas - Software Engineer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar></NavBar>
        {children}
        <footer>Hello Footer</footer>
      </body>
    </html>
  );
}
