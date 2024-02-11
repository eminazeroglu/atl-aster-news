import { useEffect } from 'react';
import { FaFileContract } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { SiAmazongames } from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { MdNature } from "react-icons/md";
import { useFetchCategoryList } from '../../hooks/useFetch';
import { BiWorld } from "react-icons/bi";
import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { route } from '../../utils/helper';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineAgriculture } from "react-icons/md";



function Icon({ slug }) {
    const icons = {
        "world": <BiWorld />,
        "politics": <FaFileContract />,
        "sports": <MdOutlineSportsBasketball />,
        "technology": <FaRobot />,
        "economy": <RiMoneyDollarCircleLine />,
        "entertainment": <SiAmazongames />,
        "health": <MdHealthAndSafety />,
        "science": <MdOutlineScience />,
        "culture": <MdOutlineAgriculture />,
        "environment": <MdNature />
    }
    return icons[slug] || false
}

function Navbar() {

    const [categories, fetchCategories, loading] = useFetchCategoryList();

    const {slug} = useParams();


    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className="pr-[17px]">
            {categories.map((category, index) => (
                <NavLink to={route('search', {slug: category.slug})} key={index} className={classNames({
                    'flex items-center text-amberBlack h-[50px] relative pl-[33px] rounded-tr-full rounded-br-full space-x-[22px] text-[16px] dark:text-gray-300': true,
                    'bg-[#e0f0f8] dark:bg-gray-800 dark:!text-white text-skyBlue font-bold after:content-[""] after:absolute after:left-[15px] after:size-[6px] after:rounded-full after:bg-skyBlue': slug === category.slug
                })}>
                    <span className="text-[24px]">
                        <Icon slug={category.slug} />
                    </span>
                    <span>{category.name}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default Navbar;