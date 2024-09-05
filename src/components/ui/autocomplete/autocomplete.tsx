import {useState} from "react";
import {
    AutoComplete as PrimeReactAutoComplete,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";

import "./autocomplete.scss";

type AutoCompleteProps<T> = {
    id: string;
    label: string;
    field: keyof T;
    suggestions: T[];
    value: T | null;
    emptyMessage?: string;
    placeholder?: string;
    onChange: (value: T | null) => void;
    onSelect?: (value: T) => void;
};

export const AutoComplete = <T extends {[key: string]: any}>({
    field,
    id,
    label,
    suggestions,
    value,
    emptyMessage = "No se encontraron registros",
    placeholder = "Buscar...",
    onChange,
    onSelect,
}: AutoCompleteProps<T>) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<T[]>([]);
    const [query, setQuery] = useState("");

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();
        const filtered = query
            ? suggestions.filter((item) =>
                  String(item[field]).toLowerCase().includes(query)
              )
            : suggestions;
        setFilteredSuggestions(filtered);
        setQuery(event.query);
    };

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <PrimeReactAutoComplete
                completeMethod={search}
                emptyMessage={emptyMessage}
                field={String(field)}
                id={id}
                suggestions={filteredSuggestions}
                placeholder={placeholder}
                style={{position: "relative"}}
                value={value}
                dropdown
                onChange={(e) => onChange(e.value)}
                onSelect={(e) => onSelect(e.value)}
            />
        </>
    );
};
