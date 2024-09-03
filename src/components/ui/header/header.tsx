import "./header.scss";
import {Aside} from "../aside/aside";
import {HeaderUser} from "./header-user";
import {HeaderLogo} from "./header-logo";

export const Header = () => {
    return (
        <header>
            <Aside />
            <HeaderUser />
        </header>
    );
};
