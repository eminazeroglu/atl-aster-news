import { NavLink } from "react-router-dom";
import menus from '../../routers/menus';

function FooterMenuMobile() {
    return (
        <section className="flex items-center z-50 justify-between fixed bottom-0 left-0 right-0 h-[60px] bg-white shadow">
            {menus.map((menu, index) => (
                <NavLink to={menu.path} className="flex flex-col justify-center items-center flex-1" key={index}>
                    {menu.icon && (
                        <span className="text-2xl">
                            {menu.icon}
                        </span>
                    )}
                    <span className="text-[9px]">{menu.name}</span>
                </NavLink>
            ))}
        </section>
    );
}

export default FooterMenuMobile;