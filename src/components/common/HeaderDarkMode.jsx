import { Switch } from "antd";
import { useContextGlobal } from "../../context/GlobalContext";

function HeaderDarkMode() {

    const { dark, handleDarkMode } = useContextGlobal();

    return (
        <div>
            <Switch
                value={dark}
                onChange={handleDarkMode}
                checkedChildren="Light"
                unCheckedChildren="Dark"
            />
        </div>
    );
}

export default HeaderDarkMode;