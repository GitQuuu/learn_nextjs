'use client';

export default function Error({error, reset}) {
    return (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Failed to fetch news article. Please try again later.</p>
            <p>{error.message}</p>
            <button onClick={reset}>Try again</button>
        </main>
    );
}