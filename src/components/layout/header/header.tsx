import "./header.scss";
import {Aside} from "../aside/aside";
import {HeaderUser} from "./components/header-user";

export const Header = () => {
    return (
        <header>
            <Aside />
            <HeaderUser />
        </header>
    );
};
