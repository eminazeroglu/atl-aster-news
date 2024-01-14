import { useEffect } from 'react';
import { GiWorld } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiAmazongames } from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { MdNature } from "react-icons/md";
import { GiTeamUpgrade } from "react-icons/gi";
import { useFetchCategoryList } from '../../hooks/useFetch';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

function Icon({ slug }) {
    const icons = {
        "world": <GiWorld />,
        "politics": <FaFileContract />,
        "sports": <MdOutlineSportsBasketball />,
        "technology": <FaRobot />,
        "economy": <GiTakeMyMoney />,
        "entertainment": <SiAmazongames />,
        "health": <MdHealthAndSafety />,
        "science": <MdOutlineScience />,
        "culture": <GiTeamUpgrade />,
        "environment": <MdNature />
    }
    return icons[slug] || false
}

function Navbar() {

    const [categories, fetchCategories, loading] = useFetchCategoryList();


    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className="pr-[17px]">
            {categories.map((category, index) => (
                <NavLink to={`/search/${category.slug}`} key={index} className={classNames({
                    'flex items-center text-amberBlack h-[50px] relative pl-[33px] rounded-tr-full rounded-br-full space-x-[22px] text-[16px]': true,
                    'bg-[#e0f0f8] text-skyBlue font-bold after:content-[""] after:absolute after:left-[15px] after:size-[6px] after:rounded-full after:bg-skyBlue': index === 0
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