import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function AuthorSkelaton() {
    return (
        <article className="bg-white dark:bg-gray-800 dark:text-white shadow-theme p-[13px] flex flex-col">
            <figure className="w-[70px] h-[70px] rounded-full mx-auto">
                <Skeleton height={70} circle={true} />
            </figure>
            <div className="pt-[7px] flex flex-col flex-1">
                <Skeleton height={20} />
                <div className="relative left-0 right-0 mx-auto">
                    <Skeleton height={14} width={'80px'} />
                </div>
                <Skeleton height={32} />
            </div>
        </article>
    );
}

export default AuthorSkelaton;