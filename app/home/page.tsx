import {RedirectToSignIn, SignedIn, SignedOut} from "@clerk/nextjs";

export default function Home() {

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
