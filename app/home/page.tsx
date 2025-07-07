'use client';
import { RedirectToSignIn, SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import {useEffect} from "react";


export default function Home() {
    const { getToken, isLoaded, isSignedIn } = useAuth();

    useEffect(() => {
        const fetchToken = async () => {
            console.log("Loaded:", isLoaded, "SignedIn:", isSignedIn);

            if (isLoaded && isSignedIn) {
                const token = await getToken(); // optional: { template: "your-template" }
                if (token) {
                    console.log("JWT Token:", token);
                } else {
                    console.warn("No JWT token returned");
                }
            }
        };

        fetchToken().then(r => {
            
        } );
    }, [getToken, isLoaded, isSignedIn]);

    return (
        <>
            <SignedIn>
                <main>
                    <img src="/logo.png" alt="A server surrounded by magic sparkles." />
                    <h1>Welcome to this NextJS Course!</h1>
                    <p>🔥 Let&apos;s get started! 🔥</p>
                </main>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}

