import { useClickAway } from "@uidotdev/usehooks";
import classNames from "classnames";
import { useState } from "react";

function Dropdown({children, helperBlock, onItemClick, items = []}) {

    const [open, setOpen] = useState(false);

    const ref = useClickAway(() => {
        setOpen(false);
    });

    return (
        <div className="relative inline-flex" ref={ref}>
            <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={() => setOpen(!open)}
            >
                {children}
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>


            <div
                id="dropdown"
                className={classNames({
                    'z-10 bg-white overflow-hidden dark:bg-gray-800 divide-y absolute top-full right-5 dark:!divide-gray-700 divide-gray-100 rounded-lg shadow w-44': true,
                    'hidden': !open
                })}
            >
                {helperBlock}
                {items.length > 0 && (
                    <ul
                        className="text-sm"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        {items.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => onItemClick(item)}
                                    className="flex w-full dark:hover:bg-gray-700 hover:bg-gray-100 items-center space-x-2 px-4 py-2 "
                                >
                                    {item?.icon && (
                                        <span>
                                            {item.icon}
                                        </span>
                                    )}
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Dropdown;