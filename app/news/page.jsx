import Link from 'next/link';
import { DUMMY_NEWS } from '../../dummy-news';


export default function NewsPage() {
    return (
        <>
            <h1>News page</h1>
            {DUMMY_NEWS.length === 0 ? (
                <p>No news articles available.</p>
            ) : (
                <ul className="news-list" aria-label="News articles">
                    {DUMMY_NEWS.map((item) => (
                        <li key={item.id}>
                            <Link href={`/news/${item.slug}`}>
                                <img src={`/images/news/${item.image}`} alt={item.title} />
                                <span> {item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}