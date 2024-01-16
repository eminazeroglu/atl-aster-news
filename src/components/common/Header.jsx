import { FiLogOut, FiUser } from 'react-icons/fi'
import Dropdown from '../ui/dropdown';
import menus from '../../routers/menus';
import { NavLink } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

function Header() {

    const profileMenus = [
        {key: 'profile', name: 'Profile', icon: <FiUser/>},
        {key: 'logout', name: 'Logout', icon: <FiLogOut/>},
    ];

    const handleItemClick = (i) => {
        console.log(i);
    }

    return (
        <div className="pt-[15px] pb-[40px] flex items-center justify-between">
            <div className="flex items-center space-x-6">
                <HeaderSearch/>
                <div className="flex items-center">
                    {menus.map((menu, index) => (
                        <NavLink to={menu.path} className="nav-link" key={index}>
                            {menu.icon && (
                                <span>
                                    {menu.icon}
                                </span>
                            )}
                            <span>{menu.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div>
                <Dropdown
                    helperBlock={
                        <div className="flex items-center p-2 space-x-2 border-b">
                            <figure className="size-[40px] rounded-full border-2 overflow-hidden">
                                <img className="img-cover" src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </figure>
                            <div className="font-medium text-sm">
                                Irene Strong
                            </div>
                        </div>
                    }
                    items={profileMenus}
                    onItemClick={handleItemClick}
                >
                    <span className="flex items-center space-x-[13px]">
                        <span className="text-[24px]">
                            <FiUser/>
                        </span>
                        <span>My Profile</span>
                    </span>
                </Dropdown>
            </div>
        </div>
    );
}

export default Header;