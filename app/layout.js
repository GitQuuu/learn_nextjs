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
            <nav style={{
                padding: '1rem',
                background: '#333',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div>
                    <Link href="/home" style={{marginRight: '1rem', color: 'white', textDecoration: 'none'}}>
                        Home
                    </Link>
                    <Link href="/awesome" style={{color: 'white', textDecoration: 'none'}}>
                        Awesome
                    </Link>
                </div>
                <Link href="/profile" style={{color: 'white', textDecoration: 'none'}}>
                    MyProfile
                </Link>
            </nav>
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}