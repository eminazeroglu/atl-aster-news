import classNames from "classnames";
import { useStoreApp } from "../../../store/app";

function FormGroup({children, label, name = false}) {

    const {formErrors} = useStoreApp();

    console.log();

    return (
        <div>
            <label className="font-bold mb-1">{label}</label>
            <div className={classNames({
                'border border-gray-200 p-2 rounded': true,
                'border-red-500': formErrors[name]
            })}>
                {children}
            </div>
            {formErrors[name] && (
                <p className="text-red-500 text-xs mt-1">{formErrors[name]}</p>
            )}
        </div>
    );
}

export default FormGroup;