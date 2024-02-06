import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function NewsSkelaton() {
    return (
        <article className="bg-white news-item dark:bg-gray-800 p-[17px] shadow-theme rounded-[4px] relative">
            <div className="flex w-full space-x-[18px]">
                <div className="w-1/2">
                    <Skeleton />
                    <Skeleton height={'10px'} />
                    <Skeleton height={'10px'} width={'80%'} />
                    <Skeleton height={'10px'} />
                    <Skeleton height={'10px'} width={'60%'} />
                </div>
                <div className='w-1/2'>
                    <Skeleton height={'132px'} />
                </div>
            </div>
            <div className="mt-[10px] w-full flex items-center justify-between">
                <div className='w-1/2'>
                    <Skeleton />
                </div>
                <div className='w-1/2 flex justify-end'>
                    <Skeleton width={'50px'} />
                </div>
            </div>
        </article>
    );
}

export default NewsSkelaton;