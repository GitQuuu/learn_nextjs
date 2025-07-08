export async function fetchUserProfile(token: string) {
    const res = await fetch("https://localhost:5001/api/User/", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch profile");
    }

    return res.text();
}
