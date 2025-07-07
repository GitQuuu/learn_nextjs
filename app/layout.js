import './globals.css'
import {ClerkProvider} from "@clerk/nextjs";
import Navbar from ".q/components/Navbar";


export const metadata = {
    title: 'NextJS Course App',
    description: 'Your first NextJS app!',
};

export default function RootLayout({children}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body>
            <Navbar />
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}