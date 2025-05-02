'use client';

export default function NotFound({error, reset}) {
    return (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Not found. Please try again later.</p>
            <p>{error.message}</p>
            <button onClick={reset}>Try again</button>
        </main>
    );
}