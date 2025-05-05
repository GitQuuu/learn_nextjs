import {getLatestNews} from "@/app/lib/news";
import NewsList from "@/app/components/news-list/news-list";

export default function LatestNewsPage() {
    const latestNews = getLatestNews();
    return(
        <>
            <h2>Latest news</h2>
            <NewsList news={latestNews}></NewsList>
        </>
    )
}