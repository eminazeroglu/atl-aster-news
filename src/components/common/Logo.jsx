import { Link } from "react-router-dom";
function Logo() {
    return (
        <div>
            <Link to={'/'} className="flex items-center pl-[31px] space-x-[15px] lg:py-[28px]">
                <img src="/logo.svg" alt="" />
                <span className="text-primary font-bold text-[18px] dark:text-gray-300">Aster News</span>
            </Link>
        </div>
    );
}

export default Logo;