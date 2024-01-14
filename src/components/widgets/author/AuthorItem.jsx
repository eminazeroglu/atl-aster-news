import Button from "../../ui/button";

function AuthorItem({item}) {
    return (
        <article className="bg-white shadow-theme p-[13px]">
            <figure className="w-[70px] h-[70px] rounded-full mx-auto overflow-hidden">
                <img src={item.photo} alt="" className="img-cover" />
            </figure>
            <div className="pt-[7px]">
                <h5 className="text-center font-medium text-[14px]">{item.fullname}</h5>
                <p className="text-center text-[12px] mb-[7px] text-gray-500">{item.agency}</p>
                <Button property="sky-blue" rounded={true} block={true}>
                    Xəbərlər
                </Button>
            </div>
        </article>
    );
}

export default AuthorItem;