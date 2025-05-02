import Link from 'next/link';

export default function newsPage(){

    const newsItems = [
        { id: 1, title: 'First News', slug: 'first-news' },
        { id: 2, title: 'Second News', slug: 'second-news' },
        { id: 3, title: 'Third News', slug: 'third-news' },
    ];


    return (
        <>
            <ul>
                {newsItems.map((item) => (
                    <li key={item.id}>
                        <Link href={`/news/${item.slug}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );


}