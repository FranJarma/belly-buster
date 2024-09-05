import {useState} from "react";
import {MultiSelect as PrimeReactMultiSelect} from "primereact/multiselect";

import "./multiselect.scss";

type MultiSelectProps<T> = {
    filter: boolean;
    name: string;
    optionLabel: string;
    options: T[];
    groupLabel?: string;
    groupChildren?: string;
    emptyMessage?: string;
    maxSelectedLabels?: number;
    placeholder?: string;
    tooltip?: string;
};

export const MultiSelect = <T extends object>({
    filter = false,
    name,
    optionLabel,
    options,
    emptyMessage = "No se encontraron elementos",
    groupLabel = "",
    groupChildren = "",
    maxSelectedLabels = 10,
    placeholder = "Seleccione",
}: MultiSelectProps<T>) => {
    const [selectedOptions, setSelectedOptions] = useState<T[]>([]);

    return (
        <PrimeReactMultiSelect
            emptyMessage={emptyMessage}
            filter={filter}
            optionLabel={optionLabel}
            options={options}
            optionGroupLabel={groupLabel}
            optionGroupChildren={groupChildren}
            onChange={(e) => setSelectedOptions(e.value)}
            maxSelectedLabels={maxSelectedLabels}
            placeholder={placeholder}
            tooltipOptions={{
                position: "bottom",
            }}
            tooltip={selectedOptions?.map((p) => (p as any)[name]).join(", ")}
            value={selectedOptions}
        />
    );
};
