import React from "react";
import "./login.scss";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {Footer} from "@components/ui";

export const Login = () => {
    return (
        <>
            <section className="login__container">
                <section className="login__form">
                    <section className="login__background-logo">
                        <img src="/logo.jpg" />
                    </section>
                    <section className="login__user">
                        <InputText placeholder="Usuario" />
                        <InputText placeholder="Contraseña" type="password" />
                        <Link
                            className="p-button font-bold"
                            rel="noopener noreferrer"
                            target="_self"
                            to="/inicio"
                        >
                            Iniciar Sesión
                        </Link>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    );
};
