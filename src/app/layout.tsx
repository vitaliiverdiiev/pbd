import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DashboardLayout } from '@/app/layouts';
import { ThemeProvider } from '@/app/providers';
import { cn } from '@/shared/utils';
import '../lib/app/assets/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'pbd.',
  description: "Phil Be Devin'. The whole bunch of everything and nothing.",
  icons: {
    icon: '/images/logo-icon-2.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${inter.variable}`,
          'bg-background text-foreground antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DashboardLayout>{children}</DashboardLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
