import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "admin",
 description: "Generated by create next app",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <ClerkProvider>
   <html lang="en">
    <body className={inter.className}>
     <ToastProvider />
     <ModalProvider />

     {children}
    </body>
   </html>
  </ClerkProvider>
 );
}
