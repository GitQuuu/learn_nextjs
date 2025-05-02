'use client';

export default function NewsNotFound({error, reset}) {
    return (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>News article not found. Please try again later.</p>
            <button onClick={reset}>Try again</button>
        </main>
    );
}