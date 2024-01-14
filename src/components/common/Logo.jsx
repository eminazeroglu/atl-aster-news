import logo from "@/assets/img/logo.svg"
import { NavLink } from "react-router-dom";
function Logo() {
    return (
        <div>
            <NavLink to={'/'} className="flex items-center pl-[31px] space-x-[15px] py-[28px]">
                <img src={logo} alt="" />
                <span className="text-primary font-bold text-[18px]">Aster News</span>
            </NavLink>
        </div>
    );
}

export default Logo;