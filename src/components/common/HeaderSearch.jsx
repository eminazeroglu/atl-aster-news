import { useEffect, useState } from "react";
import { FiSearch } from 'react-icons/fi'
import { useFetchNewsList } from "../../hooks/useFetch";
import { serviceNewsFetchList } from "../../services/news.service";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "@uidotdev/usehooks";
import LoadingIcon from "../ui/loading-icon";

function HeaderSearch() {

    const { pathname } = useLocation();
    const [text, setText] = useState('');
    const [news, setNews] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);

    const ref = useClickAway(() => {
        setNews(false);
        setNotFound(false);
    });


    const fetchNews = async (text) => {
        setNotFound(false);
        setNews(false);
        if (text.trim() !== '') {
            setLoading(true);
            const res = await serviceNewsFetchList({ limit: 5, title: text.trim() });
            setLoading(false);
            if (res.total > 0) {
                setNews(res.data);
            }
            else {
                setNotFound(true);
            }
        }
    }

    useEffect(() => {
        fetchNews(text)
    }, [text])

    useEffect(() => {
        setNews(false)
        setText('');
    }, [pathname])

    return (
        <div className="relative w-full lg:w-[inital]" ref={ref}>
            <div className="flex p-[14px] justify-between items-center bg-[#ECF5F8] dark:bg-gray-800 w-full lg:w-[395px] 2xl:w-[350px] rounded-theme">
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Search for news..." className="bg-transparent w-full focus:outline-none" />
                <span>
                    {loading && (
                        <span className="relative -top-[2px]">
                            <LoadingIcon
                                width={16}
                                height={16}
                            />
                        </span>
                    )}
                    {!loading && (
                        <span className="hidden lg:inline-block">
                            <FiSearch />
                        </span>
                    )}
                </span>
            </div>

            <div className="absolute dark:bg-gray-800 bg-white z-50 shadow-theme top-full left-0 right-0">
                {(news && !notFound) && (
                    <ul className="divide-y dark:divide-gray-700 divide-gray-100">
                        {news.map((item, index) => (
                            <li key={index}>
                                <Link to={`/view/${item.slug}`} className="flex p-2 items-center space-x-3">
                                    <figure className="w-10 h-10 shrink-0 rounded-full overflow-hidden">
                                        <img src={item.photo} className="img-cover" alt="" />
                                    </figure>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                {!news && notFound && (
                    <div className="p-2 bg-red-100 text-red-500">Xəbər tapılmadı</div>
                )}
            </div>

        </div>
    );
}

export default HeaderSearch;