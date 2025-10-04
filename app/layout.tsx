import type { Metadata } from "next";
import "./globals.css";
import {poppins, plusJakartaSans, jost, mono} from "@/lib/fonts";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Motion App",
  description: "A app for displaying motion animations and interactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${plusJakartaSans.variable} ${jost.variable} ${mono.variable} dark bg-background text-foreground antialiased`}
        suppressHydrationWarning
        
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
