import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import Navbar from "../components/common/Navbar";
import RightAside from "../components/common/RightAside";
import Subscription from "../components/widgets/subscription";
import HomePage from "../pages/home";

function AppLayout() {
    return (
        <main className="w-[1200px] mx-auto flex gap-x-[45px]">
            <div className="w-[260px] shrink-0">
                <Logo/>
                <Navbar/>
                <Subscription className="mt-[40px]"/>
            </div>
            <div className="flex-1">
                <Header/>
                <div className="flex gap-x-[45px]">
                    <div className="flex-1">
                        <HomePage/>
                    </div>
                    <div className="w-[285px] shrink-0">
                        <RightAside/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AppLayout;