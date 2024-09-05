import {PrimeIcons} from "primereact/api";

export type AsideItem = {
    href: string;
    label: string;
    icon: string;
    children?: AsideItem[];
};

export const asideItems: AsideItem[] = [
    {
        href: "/inicio",
        icon: PrimeIcons.HOME,
        label: "Inicio",
    },
    {
        href: "/gestionar-pedidos",
        icon: PrimeIcons.BOOK,
        label: "Pedidos",
    },
    {
        href: "/gestionar-productos",
        icon: PrimeIcons.BOX,
        label: "Productos",
    },
    {
        href: "/gestionar-equipo",
        icon: PrimeIcons.USERS,
        label: "Equipo de Trabajo",
    },
    {
        href: "/gestionar-negocio",
        icon: PrimeIcons.COG,
        label: "Información de Negocio",
    },
];
