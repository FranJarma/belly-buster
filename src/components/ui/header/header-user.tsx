import {Avatar} from "primereact/avatar";
import React from "react";
import {Link} from "react-router-dom";

export const HeaderUser = () => {
    return (
        <section className="header__user">
            <span>
                <Link to="/inicio">
                    <Avatar
                        image="/logo-no-background.png"
                        shape="square"
                        size="large"
                    />
                </Link>
            </span>
            <span className="pi pi-user" title="Ajustes de usuario"></span>
            <span className="pi pi-bell" title="Notificaciones"></span>
            <span className="pi pi-sign-out" title="Cerrar sesión"></span>
        </section>
    );
};
