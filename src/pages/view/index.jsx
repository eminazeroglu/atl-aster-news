import { Link, useParams } from "react-router-dom";
import { useFetchNewsBySlug } from "../../hooks/useFetch";
import { useEffect } from "react";
import { route } from "../../utils/helper";
import { Helmet } from "react-helmet";

function ViewPage() {

    const {slug} = useParams();
    const [data, fetchData, dataLoading] = useFetchNewsBySlug();


    useEffect(() => {
        fetchData(slug);
    }, [slug])

    return (
        <>
            {data && (
                <Helmet>
                    <title>Aster News / {data?.title}</title>
                </Helmet>
            )}
            <h1 className="text-[26px] font-bold">{data.title}</h1>
            <div className="mt-2">
                <Link className="bg-skyBlue inline-flex px-2 py-1 rounded-lg text-white" to={route('search', {slug: data?.category?.slug})}>
                    {data?.category?.name}
                </Link>
            </div>
            <div className="mt-4">
                <figure className="aspect-w-3 aspect-h-2 rounded-theme overflow-hidden">
                    <img src={data.photo} className="img-cover" alt="" />
                </figure>
            </div>
            <div className="mt-5" dangerouslySetInnerHTML={{__html: data.content}} />
        </>
    );
}

export default ViewPage;