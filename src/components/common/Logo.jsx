import logo from "@/assets/img/logo.svg"
function Logo() {
    return (
        <div>
            <a href="#" className="flex items-center pl-[31px] space-x-[15px] py-[28px]">
                <img src={logo} alt="" />
                <span className="text-primary font-bold text-[18px]">Aster News</span>
            </a>
        </div>
    );
}

export default Logo;