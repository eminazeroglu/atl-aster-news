import classNames from "classnames";

function Button(
    {
        children,
        property = 'primary',
        rounded = false,
        size = 'md',
        block = false,
        onClick
    }
) {
    return (
        <button
            className={classNames([
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
            {children}
        </button>
    );
}

export default Button;