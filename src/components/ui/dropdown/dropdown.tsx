import {Dropdown as PrimeReactDropdown} from "primereact/dropdown";

import "./dropdown.scss";

type DropdownProps<T> = {
    id: string;
    label: string;
    name: string;
    optionLabel: string;
    options: T[];
    value: T;
    emptyMessage?: string;
    placeholder?: string;
    onChange?: (e: {value: T}) => void;
};

export const Dropdown = <T extends object>({
    id,
    label,
    name,
    optionLabel,
    options,
    value,
    emptyMessage = "No se encontraron elementos",
    placeholder = "Seleccione",
    onChange,
}: DropdownProps<T>) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <PrimeReactDropdown
                emptyMessage={emptyMessage}
                filter
                onChange={onChange}
                optionLabel={optionLabel}
                options={options}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        </>
    );
};
