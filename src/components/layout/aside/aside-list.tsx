import React, {FC} from "react";

import "./aside.scss";

type AsideListProps = {
    children: React.ReactNode;
};

export const AsideList: FC<AsideListProps> = ({children}) => {
    return (
        <div className="aside__list">
            <ul>{children}</ul>
        </div>
    );
};
