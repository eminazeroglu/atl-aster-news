import { useEffect } from "react";
import { useFetchAuthorRandomList, useFetchNewsList, useFetchNewsRandomList } from "../../hooks/useFetch";
import NewsSection from "@/components/widgets/news/NewsSection";
import AuthorSection from "@/components/widgets/author/AuthorSection";
import { Helmet } from "react-helmet";

function HomePage() {

    const [randomNews, fetchRandomNews, randomLoading] = useFetchNewsRandomList();
    const [newsItems, fetchNews, newsLoading] = useFetchNewsList();
    const [authors, fetchAuthors, authorLoading] = useFetchAuthorRandomList();


    useEffect(() => {
        fetchRandomNews();
        fetchNews({ limit: 6 });
        fetchAuthors();
    }, [])


    return (
        <>
            <Helmet>
                <title>Aster News</title>
            </Helmet>
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