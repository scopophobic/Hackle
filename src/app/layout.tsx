import type { Metadata } from "next";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import localFont from "next/font/local";
import "./styles/globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html>
      <body> {children} </body>
      </html>
    </UserProvider>
  );
}

