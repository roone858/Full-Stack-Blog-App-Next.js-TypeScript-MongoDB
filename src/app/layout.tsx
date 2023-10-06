import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar/NavBar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProviders from "@/providers/ThemeProviders";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProviders>
            <NavBar />
            {children}
          </ThemeProviders>
        </ThemeContextProvider>
      </body>
    </html>
  );
}