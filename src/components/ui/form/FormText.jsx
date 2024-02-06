function FormText({onChnage, value, type = 'text', ...props}) {
    return (
        <input
            type={type}
            className="border-none outline-none w-full"
            onChange={e => onChnage(e.target.value)}
            {...props}
        />
    );
}

export default FormText;