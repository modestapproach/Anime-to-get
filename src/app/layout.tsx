import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Collection - The Lost Era",
  description:
    "DVD & VHS collection guide for classic anime from the lost era - OVAs and films you need to own",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
