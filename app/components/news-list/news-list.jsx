import Link from "next/link";

export default function NewsList({news}) {
    // Ensure news is an array, if not return early with error message
    if (!Array.isArray(news)) {
        console.error('NewsList: news prop must be an array');
        return <p>Error: Unable to display news.</p>;
    }

    return <>
        {
            news.length === 0 ? (
                <p>No news articles available.</p>
            ) : (
                <ul className="news-list" aria-label="News articles">
                    {news.map((item) => (
                        <li key={item.id}>
                            <Link href={`/news/${item.slug}`}>
                                <img src={`/images/news/${item.image}`} alt={item.title}/>
                                <span> {item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )
        }
    </>;
}