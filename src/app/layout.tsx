import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "CI/CD Presentation | Understanding Continuous Integration and Deployment",
  description:
    "Learn about CI/CD concepts, benefits, tools, and practices with interactive examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-slate-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar */}
          <Navbar />
          <div className="pt-14">{children}</div>
          <footer className="bg-slate-100 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                CI/CD Presentation Website | Built with Next.js and deployed
                with GitHub Actions
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
