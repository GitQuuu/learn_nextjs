import NewsList from "@/app/components/news-list/news-list";
import {getNewsForYear} from "@/app/lib/news";

export default function FilteredNewsPage({params}) {
    const year = params.year;
    const news = getNewsForYear(year);

    return <NewsList news={news}></NewsList>
}