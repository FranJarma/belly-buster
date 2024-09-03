import {useMemo} from "react";

import {AsideItem} from "../aside-items";

export const useRenderAsideItems = (items: AsideItem[]) => {
    const currentPath = window.location.pathname;

    const renderItems = (items: AsideItem[]) => {
        return items.map((item, index) => {
            const isActive = item.href === currentPath;
            return (
                <li key={index}>
                    <a
                        className={`aside__item ${isActive ? "active" : ""}`}
                        href={item.href}
                    >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </a>
                    {item.children && (
                        <div className="aside__item-children">
                            {renderItems(item.children)}
                        </div>
                    )}
                </li>
            );
        });
    };

    const renderedItems = useMemo(
        () => renderItems(items),
        [items, currentPath]
    );

    return renderedItems;
};
