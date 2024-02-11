import Section from '@/components/ui/section'
import { useFetchAuthorList } from '../../hooks/useFetch';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import AuthorItem from '../../components/widgets/author/AuthorItem';
import AuthorSkelaton from '../../components/widgets/author/AuthorSkelaton';

function AuthorPage() {

    const [items, fetchItems, loading, total] = useFetchAuthorList();

    useEffect(() => {
        fetchItems();
    }, [])

    return (
        <Section title={
            <div className="flex items-center justify-between border-b border-gray-300 mb-5 pb-5">
                <div className="flex items-center space-x-3 ">
                    <h3 className="text-[20px] font-[700]">Yazarlar</h3>
                </div>
                <div className="font-bold">
                    {!total && <Skeleton width={'100px'} height={'17px'} />}
                    {total && `Yazarları sayı: ${total} `}
                </div>
            </div>
        }>
            <div className="grid grid-cols-5 gap-4 dark-mode">
                {loading && (
                    <>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                        <AuthorSkelaton/>
                    </>
                )}
                {!loading && (
                    <>
                        {items.map((item, index) => (
                            <AuthorItem item={item} key={index} />
                        ))}
                    </>
                )}
            </div>
        </Section>
    );
}

export default AuthorPage;