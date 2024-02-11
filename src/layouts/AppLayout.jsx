import { isMobile } from "react-device-detect";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import Navbar from "../components/common/Navbar";
import Subscription from "../components/widgets/subscription";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterMenuMobile from "../components/common/FooterMenuMobile";

function AppLayout({ children }) {
    return (
        <main className="w-full overflow-x-hidden pt-[75px] pb-[75px] lg:pt-0 lg:pb-0 2xl:w-[1360px] mx-auto lg:flex lg:gap-x-[45px]">
            {!isMobile && (
                <div className="w-[260px] shrink-0">
                    <div className="fixed overflow-x-auto max-h-screen w-[260px] pr-3 pb-5">
                        <Logo />
                        <Navbar />
                        <Subscription className="mt-[40px]" />
                    </div>
                </div>
            )}
            {isMobile && <HeaderMobile/>}
            <div className="flex-1">
                {!isMobile && <Header />}
                <div className="flex gap-x-[45px] lg:pt-[25px] lg:px-0 px-[20px] lg:pr-[45px]">
                    <div className="lg:flex-1 w-full">
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>


            {isMobile && <FooterMenuMobile/>}
        </main>
    );
}

export default AppLayout;