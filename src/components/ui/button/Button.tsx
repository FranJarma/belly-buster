import {FC} from "react";
import {Button as PrimeReactButton} from "primereact/button";

type ButtonProps = {
    label: string;
    severity:
        | "secondary"
        | "success"
        | "info"
        | "warning"
        | "danger"
        | "help"
        | "contrast"
        | undefined;
    loading?: boolean;
    icon?: string;
    iconPos?: "top" | "bottom" | "left" | "right" | undefined;
    link?: boolean;
};

export const Button: FC<ButtonProps> = (buttonProps) => {
    return <PrimeReactButton {...buttonProps} />;
};
