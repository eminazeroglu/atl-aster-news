import NewsSection from '@/components/widgets/news/NewsSection'
import { useParams } from 'react-router-dom';
import { useFetchNewsSearch } from '../../hooks/useFetch';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
function SearchPage() {

    const { slug } = useParams();
    const categories = JSON.parse(localStorage.getItem('categories'));
    const category = categories.find(i => i.slug === slug);
    const [news, fetchNewsSearch, newsLoading] = useFetchNewsSearch();

    useEffect(() => {
        fetchNewsSearch({ category: slug })
    }, [slug])

    return (
        <>
            <Helmet>
                <title>Aster News / {category.name}</title>
            </Helmet>
            <NewsSection
                loading={newsLoading}
                items={news}
                title={category.name}
            />
        </>
    );
}

export default SearchPage;