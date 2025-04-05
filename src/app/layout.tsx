import type { ReactNode } from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// Load the Inter font once at the top level
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahil khatiwada - Portfolio",
  description: "Portfolio website showcasing UI/UX design work by Alex Morgan",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
