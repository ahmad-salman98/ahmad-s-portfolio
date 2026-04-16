import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const lufga = localFont({
    src: [
        {
            path: "../../public/fonts/Lufga-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/Lufga-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Lufga-Medium.woff2", // the "bold" file
            weight: "600", // Using 600 (Semi-Bold) makes it punchy
            style: "normal",
        },
        {
            path: "../../public/fonts/Lufga-Bold.woff2",
            weight: "700",
            style: "normal",
        }
    ],
    variable: "--font-lufga",
});

export const metadata: Metadata = {
    title: "Ahmad Salman's Portfolio",
    description: "Ahmad Salman's Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
            <body
                className={`${lufga.variable} font-lufga min-h-screen flex flex-col`}
            >
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
