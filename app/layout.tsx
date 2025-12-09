import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Text } from "@/components/ui/Text";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aid Distribution Dashboard",
  description: "Monitor and manage aid distribution operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <div className="min-h-screen">
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link
                    href="/"
                    className="flex items-center"
                  >
                    <Text variant="h2" className="text-primary">
                      Aid Distribution Dashboard
                    </Text>
                  </Link>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      href="/"
                      className="inline-flex items-center px-1 pt-1 hover:text-primary"
                    >
                      <Text variant="label" className="text-gray-900">
                        Distributions
                      </Text>
                    </Link>
                    <Link
                      href="/charts"
                      className="inline-flex items-center px-1 pt-1 hover:text-primary"
                    >
                      <Text variant="label" className="text-gray-500">
                        Charts
                      </Text>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
