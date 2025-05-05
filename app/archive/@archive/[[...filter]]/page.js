import NewsList from "@/app/components/news-list/news-list";
import {getAvailableNewsYears, getNewsForYear} from "@/app/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({params}) {
    const filter = params.filter;
    console.log(filter);

    const links = getAvailableNewsYears();
    return <header id="archive-header">
        <nav>
            <ul>
                {links.map(link => <li key={link}>
                    <Link href={`/archive/${link}`}>{link}</Link>
                </li>)}
            </ul>
        </nav>
    </header>
    // const news = getNewsForYear(year);
    //
    // return <NewsList news={news}></NewsList>
}