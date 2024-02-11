import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchNewsList } from "../../hooks/useFetch";
import NewsSection from "@/components/widgets/news/NewsSection";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function AuthorPageView() {
    const { slug } = useParams();
    const author = JSON.parse(localStorage.getItem('author'));
    const [newsItems, fetchNews, newsLoading, total] = useFetchNewsList();

    useEffect(() => {
        fetchNews({ authorSlug: slug })
    }, [slug])

    return (
        <>
            <NewsSection
                loading={newsLoading}
                items={newsItems}
                title={
                    <div className="flex items-center justify-between border-b border-gray-300 mb-5 pb-5">
                        <div className="flex items-center space-x-3 ">
                            <figure className="w-[70px] h-[70px] overflow-hidden rounded-full">
                                <img src={author?.photo} alt="" className="img-cover" />
                            </figure>
                            <h3 className="text-[20px] font-[700]">{author?.fullname}</h3>
                        </div>
                        <div className="font-bold">
                            {!total && <Skeleton width={'100px'} height={'17px'}/>}
                            {total && `Xəbər sayı: ${total} `}
                        </div>
                    </div>
                }
            />
        </>
    );
}

export default AuthorPageView;