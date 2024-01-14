import { useEffect } from "react";
import { useFetchAuthorRandomList, useFetchNewsList, useFetchNewsRandomList } from "../../hooks/useFetch";
import NewsSection from "./components/NewsSection";
import AuthorSection from "./components/AuthorSection";

function HomePage() {

    const [randomNews, fetchRandomNews, randomLoading] = useFetchNewsRandomList();
    const [newsItems, fetchNews, newsLoading] = useFetchNewsList();
    const [authors, fetchAuthors, authorLoading] = useFetchAuthorRandomList();


    useEffect(() => {
        fetchRandomNews();
        fetchNews();
        fetchAuthors();
    }, [])


    return (
        <>
            <NewsSection
                loading={randomLoading}
                items={randomNews}
                title={'Ən çox oxunanlar'}
            />

            <AuthorSection
                items={authors}
                loading={authorLoading}
            />

            <NewsSection
                loading={newsLoading}
                items={newsItems}
                title={'Ən son xəbərlər'}
            />
        </>
    );
}

export default HomePage;