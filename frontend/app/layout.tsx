import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SLIP - Shared Liability Insurance Protocol",
  description: "Decentralized lending on Moca Chain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}