import Link from 'next/link';

export default function HomePage() {
    return (
        <div id="home">
            <h1>Next.js Routing & Page Rendering</h1>
            <div>
                <Link href="/news"></Link>News
            </div>
        </div>
    );
}
