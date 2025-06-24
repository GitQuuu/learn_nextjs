'use client';

import { useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function CustomSignInPage() {
    const { signIn, setActive, isLoaded } = useSignIn();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            const result = await signIn.create({
                identifier: email,
                password,
            });

            console.log("Sign-in result:", result);

            if (result.status === 'complete') {
                await setActive({ session: result.createdSessionId });
                console.log( result);
                router.push('/home');
            } else {
                console.log("Additional steps required:", result);
            }
        } catch (err: any) {
            console.error("Sign-in error:", err);
            setError(err.errors?.[0]?.message || "Sign-in failed");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-xl mb-4">Welcome to this NextJS Course! with Clerk</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-64">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="p-2 border rounded"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                    Sign In
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
        </div>
    );
}
