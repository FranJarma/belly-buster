import React from "react";
import "./footer.scss";

export const Footer = () => {
    return (
        <footer>
            Belly Buster &copy; {new Date().getFullYear()} - Todos los derechos
            reservados
        </footer>
    );
};
