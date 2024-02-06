import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import NewsCommentItem from "./NewsCommentItem";
import { useState } from "react";

function NewsComments({ items = [], newsId, onSuccess }) {

    const [limit, setLimit] = useState(true);
    let comments = items;

    if (limit) comments = items.slice(0, 4)

    return (
        <div>
            <div>
                <button onClick={() => setLimit(!limit)} className="text-skyBlue flex items-center space-x-2 underline">
                    <span>
                        {!limit ? 'Rəyləri qısalt' : 'Bütün rəylər'}
                        ({comments.length})
                    </span>
                    <span className="inline-flex w-[25px] h-[25px] justify-center items-center bg-skyBlue text-white rounded-full">
                        {!limit && <FiChevronDown />}
                        {limit && <FiChevronUp />}
                    </span>
                </button>
            </div>
            <div className="mt-[37px] space-y-[20px]">
                {comments.map((comment, index) => (
                    <NewsCommentItem onSuccess={onSuccess} newsId={newsId} key={index} comment={comment} />
                ))}
            </div>
        </div>
    );
}

export default NewsComments;