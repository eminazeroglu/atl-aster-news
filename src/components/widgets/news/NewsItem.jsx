import moment from "moment";
import { FiShare } from "react-icons/fi";
import { NavLink } from "react-router-dom";


function NewsItem({item}) {
    return (
        <article className="bg-white p-[17px] shadow-theme rounded-[4px] relative">
            <NavLink to={`/view/${item.slug}`} className="absolute inset-0"></NavLink>
            <div className="flex space-x-[18px]">
                <div>
                    <h4 className="text-[17px] font-medium line-clamp-2">{item.title}</h4>
                    <p className="text-gray-500 text-[14px] line-clamp-3">{item.description}</p>
                </div>
                <div>
                    <figure className="w-[132px] h-[132px]">
                        <img className="img-cover" src={item.photo} alt="" />
                    </figure>
                </div>
            </div>
            <div className="mt-[10px] flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[12px] text-gray-400">
                    <span>{item.author.agency}</span>
                    <span className="w-[4px] h-[4px] rounded-full inline-block opacity-40 bg-[#2F9FF8]"></span>
                    <span>{moment(item.published_date).format('DD-MM-YYYY HH:mm')}</span>
                </div>
                <div>
                    <a href="#" className="flex items-center text-[12px] space-x-[8px] text-primary font-medium">
                        <FiShare/>
                        <span>Paylaş</span>
                    </a>
                </div>
            </div>
        </article>
    );
}

export default NewsItem;