import Header from "../components/common/Header";
import Logo from "../components/common/Logo";
import Navbar from "../components/common/Navbar";
import RightAside from "../components/common/RightAside";
import Subscription from "../components/widgets/subscription";

function DemoLayout({children}) {
    return (
        <main className="w-full mx-auto flex gap-x-[45px]">
            <div className="flex-1">
                <Header/>
                <div className="flex gap-x-[45px]">
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DemoLayout;