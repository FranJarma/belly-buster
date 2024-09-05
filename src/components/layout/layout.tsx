import React, {FC} from "react";
import {Header, Footer} from ".";

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};
