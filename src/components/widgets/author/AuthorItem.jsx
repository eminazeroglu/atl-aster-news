import { useNavigate } from "react-router-dom";
import Button from "../../ui/button";
import { route } from "../../../utils/helper";

function AuthorItem({item}) {

    const navigate = useNavigate();

    const handleRoute = (item) => {
        localStorage.setItem('author', JSON.stringify(item));
        navigate(route('author', {slug: item.slug}), {replace: true});
    }

    return (
        <article className="bg-white dark:bg-gray-800 dark:text-white shadow-theme p-[13px] flex flex-col">
            <figure className="w-[70px] h-[70px] rounded-full mx-auto overflow-hidden">
                <img src={item.photo} alt="" className="img-cover" />
            </figure>
            <div className="pt-[7px] flex flex-col flex-1">
                <h5 className="text-center font-medium text-[14px]">{item.fullname}</h5>
                <p className="text-center text-[12px] mb-[7px] dark:text-gray-300 text-gray-500 h-full">{item.agency}</p>
                <Button onClick={() => handleRoute(item)} property="sky-blue" rounded={true} block={true}>
                    Xəbərlər
                </Button>
            </div>
        </article>
    );
}

export default AuthorItem;