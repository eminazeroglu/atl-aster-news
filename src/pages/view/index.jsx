import { Link, useParams } from "react-router-dom";
import { useFetchNewsBySlug, useFetchNewsComments } from "../../hooks/useFetch";
import { useEffect } from "react";
import { route } from "../../utils/helper";
import { Helmet } from "react-helmet";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import NewsCommentForm from "../../components/widgets/news/NewsCommentForm";
import NewsComments from "../../components/widgets/news/NewsComments";
import { useContextAuth } from "../../context/AuthContext";


function ViewPage() {

    const { slug } = useParams();
    const [data, fetchData, dataLoading] = useFetchNewsBySlug();
    const [comments, fetchComments, commentLoading] = useFetchNewsComments();
    const { token } = useContextAuth();


    useEffect(() => {
        fetchData(slug);
    }, [slug])

    useEffect(() => {
        if (data?.id) {
            fetchComments(data.id)
        }
    }, [data])

    return (
        <div className="dark-mode">
            {data && (
                <>
                    <Helmet>
                        <title>Aster News / {data?.title}</title>
                    </Helmet>
                    <h1 className="text-[26px] font-bold">{data.title}</h1>
                    <div className="mt-2">
                        <Link className="bg-skyBlue inline-flex px-2 py-1 rounded-lg text-white" to={route('search', { slug: data?.category?.slug })}>
                            {data?.category?.name}
                        </Link>
                    </div>
                    <div className="mt-4">
                        <figure className="aspect-w-3 aspect-h-2 rounded-theme overflow-hidden">
                            <img src={data.photo} className="img-cover" alt="" />
                        </figure>
                    </div>
                    <div className="mt-5">
                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </div>

                    <div className="mt-[32px] space-y-[20px]">
                        {token && <NewsCommentForm onSuccess={() => fetchComments(data.id)} id={data.id} />}
                        {!token && (
                            <div className="border border-red-200 text-red-500 p-3 rounded">   
                                Rəy bildirmək üçün sayta daxil olun!
                            </div>
                        )}
                        <NewsComments 
                            items={comments.sort((a, b) => b.id - a.id)}
                            newsId={data.id}
                            onSuccess={() => fetchComments(data.id)}
                        />
                    </div>
                </>
            )}
            {!data && (
                <>
                    <Skeleton height={'20px'} className="mb-3" />
                    <Skeleton height={'32px'} width={'120px'} className="mb-3" />
                    <Skeleton height={'450px'} width={'100%'} />
                    <Skeleton count="10" height={'18px'} width={'100%'} className="mt-3" />
                </>
            )}
        </div>
    );
}

export default ViewPage;