import { FiLogOut, FiSearch, FiUser } from 'react-icons/fi'
import Dropdown from '../ui/dropdown';
import menus from '../../routers/menus';

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
                <div className="flex p-[14px] justify-between items-center bg-[#ECF5F8] w-[495px] rounded-theme">
                    <input type="text" placeholder="Search for news..." className="bg-transparent focus:outline-none" />
                    <span>
                        <FiSearch />
                    </span>
                </div>
                <div className="flex items-center">
                    {menus.map((menu, index) => (
                        <a href="#" className="flex items-center p-3 space-x-2" key={index}>
                            {menu.icon && (
                                <span>
                                    {menu.icon}
                                </span>
                            )}
                            <span>{menu.name}</span>
                        </a>
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