import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
        <h2>
            <Link href="/community">Community</Link>
        </h2>
        <h2>
            <Link href="/meals">Meals</Link>
        </h2>
        <h2>
            <Link href="/meals/share">Share</Link>
        </h2>
    </main>
  );
}
