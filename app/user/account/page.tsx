'use client';

import { useEffect, useState } from "react";
import { useAuth, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { fetchUserProfile } from "../../services/userApi";

export default function UserProfilePage() {
    const { getToken, isLoaded, isSignedIn } = useAuth();
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        console.log("FetchData");
        const fetchData = async () => {
            if (!isLoaded || !isSignedIn) return;

            const token = await getToken({ template: 'api' });
            if (!token) return;

            try {
                const data = await fetchUserProfile(token);
                setProfile(data);
            } catch (err) {
                console.error("API error:", err);
            }
        };

        fetchData().then(r => {
            console.log("Fetched data:", r);
        });
    }, [isLoaded, isSignedIn, getToken]);

    return (
        <>
            <SignedIn>
                <main className="p-4">
                    <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                    <pre>{profile ? JSON.stringify(profile, null, 2) : "Loading..."}</pre>
                </main>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}
