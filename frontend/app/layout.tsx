import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/animations.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DCA Yield Optimizer",
  description: "Luxury yield optimization on Moca Chain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-lg">
          <h1 className="text-4xl font-playfair text-gold-500 text-center">
            DCA Yield Optimizer
          </h1>
          <nav className="mt-4 flex justify-center space-x-6">
            <Link href="/" className="text-moca hover:text-gold-500 transition-colors">
              Home
            </Link>
            <Link href="/pools" className="text-moca hover:text-gold-500 transition-colors">
              Pools
            </Link>
            <Link
              href={{ pathname: "/dashboard/overview" }} // Use object syntax for typed routes
              className="text-moca hover:text-gold-500 transition-colors"
            >
              Dashboard
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 mt-6 text-center text-gold-300">
          © 2025 DCA Yield Optimizer | Built on Moca Chain
        </footer>
      </body>
    </html>
  );
}