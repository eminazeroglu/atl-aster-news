import classNames from "classnames";
import { useStoreApp } from "../../../store/app";
import { useEffect, useState } from "react";

function FormGroup({children, label, name = false, errors = false, touched = false}) {

    const {formErrors} = useStoreApp();
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        if (errors[name] && touched[name]) {
            setErrorMessage(errors[name]);
           
        }
        else {
            setErrorMessage(false);
        }
    }, [errors, touched])

    return (
        <div>
            <label className="font-bold mb-1 flex dark:text-white">{label}</label>
            <div className={classNames({
                'border border-gray-200 dark:border-gray-700 p-2 rounded ': true,
                'border-red-500': formErrors[name] || errorMessage
            })}>
                {children}
            </div>
            {(formErrors[name] || errorMessage) && (
                <p className="text-red-500 text-xs mt-1">{formErrors[name] || errorMessage}</p>
            )}
        </div>
    );
}

export default FormGroup;