import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Create Next App",
 description: "Generated by create next app",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <ClerkProvider>
   <html lang="en" suppressHydrationWarning>
    <body className={openSans.className}>
     <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="discord-theme"
     >
      {children}
     </ThemeProvider>
    </body>
   </html>
  </ClerkProvider>
 );
}
