import React, {FC} from "react";
import {Aside, Footer, Header} from "./ui";

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
