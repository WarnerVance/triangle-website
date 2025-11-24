import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'; // Ensure correct casing for the import

// Dev mode polyfill: ensure localStorage exists in Node when Next dev overlay touches it.
if (
    typeof globalThis.localStorage === "undefined" ||
    typeof globalThis.localStorage.getItem !== "function"
) {
    const memoryStore = new Map<string, string>();
    const memoryStorage: Storage = {
        get length() {
            return memoryStore.size;
        },
        clear() {
            memoryStore.clear();
        },
        getItem(key: string) {
            return memoryStore.has(key) ? memoryStore.get(key)! : null;
        },
        key(index: number) {
            return Array.from(memoryStore.keys())[index] ?? null;
        },
        removeItem(key: string) {
            memoryStore.delete(key);
        },
        setItem(key: string, value: string) {
            memoryStore.set(key, String(value));
        },
    };
    // @ts-expect-error localStorage is available at runtime in browsers; polyfilled here for Node dev.
    globalThis.localStorage = memoryStorage;
}

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Triangle Fraternity",
    description: "Official website of Triangle Fraternity",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar /> {/* Navbar added here */}
        <main className="container mx-auto py-10">{children}</main>
        </body>
        </html>
    );
}
