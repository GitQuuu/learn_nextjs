import './globals.css'
import {ClerkProvider} from "@clerk/nextjs";
import Link from 'next/link';

export const metadata = {
    title: 'NextJS Course App',
    description: 'Your first NextJS app!',
};

export default function RootLayout({children}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body>
            <nav className="p-4 bg-gray-800 text-white flex justify-between">
                <div>
                    <Link href="/home" className="mr-4 text-white no-underline">
                        Home
                    </Link>
                    <Link href="/awesome" className="text-white no-underline">
                        Awesome
                    </Link>
                </div>
                <Link href="/profile" className="text-white no-underline">
                    MyProfile
                </Link>
            </nav>
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}