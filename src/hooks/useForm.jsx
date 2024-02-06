import { useState } from "react";

const useForm = ({initialValue, onSubmit}) => {
    const [values, setValues] = useState(initialValue);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false)
    }

    const setField = (name, value) => {
        setValues(v => ({
            ...v,
            [name]: value
        }))
    }

    const setFields = (value) => {
        setValues(value);
    }

    const resetForm = () => {
        setValues(initialValue)
    }

    return {
        values,
        handleSubmit,
        setField,
        setFields,
        resetForm,
        loading
    }
}

export default useForm;