import classNames from "classnames";

function Button(
    {
        children,
        type = 'button',
        property = 'primary',
        rounded = false,
        size = 'md',
        block = false,
        onClick,
        className,
        loading = false
    }
) {
    return (
        <button
            type={type}
            disabled={loading}
            className={classNames([
                className || '',
                'btn',
                property ? `btn--${property}` : '',
                `btn--${size}`,
                {
                    'btn--rounded': rounded,
                    'btn--block': block,
                }
            ])}
            onClick={onClick}
        >
            {loading ? '...' : children}
        </button>
    );
}

export default Button;