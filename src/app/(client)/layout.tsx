import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

// Load local fonts
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the app
export const metadata: Metadata = {
  title: "GM Basket & Wishlist App",
  description: "GM Basket & Wishlist App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800`}>

        <header className="bg-gray-900 text-white py-6">
          <div className="container mx-auto flex justify-center items-center px-6">
            Header.
          </div>
        </header>

        <main className="container mx-auto px-6 py-10">{children}</main>

        <footer className="bg-gray-900 text-white py-6 mt-12">
          <div className="container mx-auto flex justify-center items-center px-6">
            Footer.
          </div>
        </footer>
      </body>
    </html>
  );
}
