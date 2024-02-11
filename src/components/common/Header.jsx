import { FiLogOut, FiUser } from 'react-icons/fi'
import Dropdown from '../ui/dropdown';
import menus from '../../routers/menus';
import { NavLink } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import HeaderDarkMode from './HeaderDarkMode';
import { useContextAuth } from '../../context/AuthContext';
import Button from '../ui/button';
import LoginModal from '../../modals/LoginModal';
import { useContextModal } from '../../context/ModalContext';
import HeaderLanguage from './HeaderLanguage';
import { translate } from '../../utils/helper';

function Header() {

    const { token, handleLogout } = useContextAuth();
    const {handleModal} = useContextModal();

    const profileMenus = [
        { key: 'profile', name: 'Profile', icon: <FiUser /> },
        { key: 'logout', name: 'Logout', icon: <FiLogOut /> },
    ];

    const handleItemClick = (i) => {
        if (i.key === 'logout') {
            handleLogout();
        }
    }

    return (
        <div className="pt-[15px] pb-[15px] pr-[45px] z-50 sticky top-0 dark:bg-gray-900 dark:text-white bg-[#F4F9F8] flex items-center justify-between">
            <div className="flex items-center space-x-6">
                <HeaderSearch />
                <div className="flex items-center ">
                    {menus.map((menu, index) => (
                        <NavLink to={menu.path} className="nav-link whitespace-nowrap" key={index}>
                            {menu.icon && (
                                <span>
                                    {menu.icon}
                                </span>
                            )}
                            <span>{translate(menu.name)}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="flex items-center">
                <HeaderLanguage/>
                <HeaderDarkMode />
                {token && (
                    <Dropdown
                        helperBlock={
                            <div className="flex items-center p-2 space-x-2 border-b dark:border-b-gray-700">
                                <figure className="size-[40px] rounded-full border-2 dark:border-gray-600 overflow-hidden">
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
                                <FiUser />
                            </span>
                            <span>{translate('header.my-profile')}</span>
                        </span>
                    </Dropdown>
                )}
                {!token && (
                    <Button onClick={() => handleModal('login', 'Login Modal')} property='sky-blue' className="ml-4" rounded={true}>
                        {translate('button.login')}
                    </Button>
                )}
            </div>

            <LoginModal/>
        </div>
    );
}

export default Header;