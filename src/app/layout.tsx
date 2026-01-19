import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep these, they are good modern fonts
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godot Game Showcase",
  description: "A premium showcase of independent Godot games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-[var(--card-border)]">
          <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-gradient">Godot</span>Showcase
            </Link>
            <div className="flex gap-6 text-sm font-medium text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/#games" className="hover:text-white transition-colors">Games</Link>
              {/* Add more links here later */}
            </div>
          </nav>
        </header>

        <main className="flex-grow pt-16">
          {children}
        </main>

        <footer className="border-t border-[var(--card-border)] py-8 mt-12 bg-black/40">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Godot Game Showcase. Built with Next.js & Godot.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
