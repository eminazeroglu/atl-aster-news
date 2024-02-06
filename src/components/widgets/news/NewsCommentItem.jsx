import { FiTrash } from "react-icons/fi";
import { useContextAuth } from "../../../context/AuthContext";
import { serviceNewsDeleteComment } from "../../../services/news.service";

function NewsCommentItem({ comment = {}, newsId, onSuccess }) {

    const { user } = useContextAuth();

    const handleRemove = async (id) => {
        const res = await serviceNewsDeleteComment(newsId, id);
        
        if (res) {
            onSuccess();
        }
    }

    return (
        <div>
            <h5 className="text-skyBlue font-medium">{comment?.user?.name + ' ' + comment?.user?.surname}</h5>
            <p className="text-[17px] my-[10px] dark:text-gray-300 text-[#667b90] font-light">{comment.body}</p>
            <div className="flex items-center justify-between">
                <span className="text-[#adbcc4] text-[12px] font-light">
                    Posted  on Jul 5, 2021 | 6:22 AM
                </span>
                <div>
                    {user.id === comment.user.id && (
                        <button onClick={() => handleRemove(comment.id)} className="flex items-center justify-center text-[12px] text-[#FF8C8C] space-x-[6px]">
                            <span>
                                <FiTrash />
                            </span>
                            <span>Delete Comment</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewsCommentItem;