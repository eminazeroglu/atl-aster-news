import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Subscription from "../widgets/subscription";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useClickAway } from "@uidotdev/usehooks";
import { useLocation } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

function HeaderMobile() {

    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const ref = useClickAway(() => {
        setIsOpen(false);
    });

    useEffect(() => {
        if (isOpen) {
            document.querySelector('body').classList.add('overflow-hidden')
        }
        else {
            document.querySelector('body').classList.remove('overflow-hidden')
        }
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false);
        setIsSearch(false);
    }, [pathname])

    return (
        <>
            <header className="fixed w-full top-0 h-[60px] flex justify-between items-center z-50 left-0 right-0 bg-white shadow">


                <>
                    {!isSearch && (
                        <Logo />
                    )}
                    {isSearch && (
                        <div className="px-4 w-full">
                            <HeaderSearch />
                        </div>
                    )}
                    <div className="flex pr-[10px] space-x-4">
                        <button onClick={() => setIsSearch(!isSearch)} className="size-[40px] flex items-center justify-center text-2xl text-primary">
                            {isSearch && <FiX/>}
                            {!isSearch && <FiSearch />}
                        </button>
                        <button onClick={() => setIsOpen(true)} className="size-[40px] flex items-center justify-center text-2xl text-primary">
                            <FiMenu />
                        </button>
                    </div>
                </>
            </header>

            <section className={classNames({
                'fixed overflow-x-hidden transition-all duration-500 overflow-y-auto flex bg-black/50 w-full z-[100] top-0 opacity-0 invisible left-0 right-0 bottom-0': true,
                '!opacity-100 !visible': isOpen
            })}>
                <div className={classNames({
                    'relative w-full delay-300 transition-all h-full -left-full': true,
                    '!left-0': isOpen
                })}>
                    <button className="absolute top-3 right-3 size-[40px] flex items-center justify-center text-2xl z-10 bg-white rounded-lg text-primary">
                        <FiX />
                    </button>
                    <div ref={ref} className="bg-white h-full w-[80%] overflow-x-hidden">
                        <div className="border-b py-[12px]">
                            <Logo />
                        </div>
                        <div className="pt-[20px]">
                            <Navbar />
                        </div>
                        <div className="!px-[20px]">
                            <Subscription className="mt-[40px]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeaderMobile;