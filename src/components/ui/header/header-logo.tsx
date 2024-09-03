import {Avatar} from "primereact/avatar";
import {Link} from "react-router-dom";

export const HeaderLogo = () => {
    return (
        <Link to="/inicio">
            <Avatar
                image="/logo-no-background.png"
                shape="square"
                size="large"
            />
        </Link>
    );
};
