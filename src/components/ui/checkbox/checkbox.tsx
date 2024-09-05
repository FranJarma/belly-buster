import {FC} from "react";
import {Checkbox as PrimeReactCheckbox} from "primereact/checkbox";

import {CheckboxChangeEvent} from "primereact/checkbox";

type CheckboxProps = {
    id: string;
    label: string;
    checked?: boolean;
    onChange?: (e: CheckboxChangeEvent) => void;
};

import "./checkbox.scss";

export const Checkbox: FC<CheckboxProps> = ({
    checked = false,
    id,
    label,
    onChange,
}) => {
    return (
        <div className="checkbox">
            <PrimeReactCheckbox
                checked={checked}
                id={id}
                onChange={onChange}
            ></PrimeReactCheckbox>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};
