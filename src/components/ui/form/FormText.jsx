function FormText({ onChnage, value, type = 'text', ...props }) {
    return (
        <input
            value={value}
            type={type}
            className="border-none outline-none w-full bg-transparent dark:text-white"
            onChange={e => onChnage(e.target.value)}
            {...props}
        />
    );
}

export default FormText;