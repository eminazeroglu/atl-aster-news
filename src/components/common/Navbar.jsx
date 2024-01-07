import { useEffect } from 'react';
import {FiHome} from 'react-icons/fi'
import { useFetchCategoryList } from '../../hooks/useFetch';

function Icon ({slug}) {
    if (slug === 'world') return <FiHome/>
    else if (slug === 'world') return <FiHome/>
}

function Navbar() {

    const [categories, fetchCategories, loading] = useFetchCategoryList();


    useEffect(() => {
        fetchCategories();
    }, [])
    
    return (
        <div className="pr-[17px]">
            {categories.map((category, index) => (
                <a href="#" key={index} className="flex items-center text-amberBlack space-x-[22px] text-[16px]">
                    <span className="text-[24px]">
                        <Icon slug={category.slug}/>
                    </span>
                    <span>{category.name}</span>
                </a>
            ))}
        </div>
    );
}

export default Navbar;