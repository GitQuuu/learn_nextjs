'use client';

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <>
            <h1 className="flex justify-center">Welcome to this NextJS Course! with Clerk</h1>
            <div className="flex justify-center items-center h-screen">
                <SignIn afterSignInUrl="/home" />
            </div>
        </>
    );
}
