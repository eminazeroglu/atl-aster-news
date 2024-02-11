function FormTextarea({ onChnage, value, type = 'text', ...props }) {
    return (
        <textarea
            value={value}
            className="border-none outline-none w-full bg-transparent dark:text-white"
            onChange={e => onChnage(e.target.value)}
            {...props}
        ></textarea>
    );
}

export default FormTextarea;