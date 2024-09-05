import React, {useState} from "react";

import {
    DataTable as PrimeReactDatatable,
    DataTableFilterMeta,
    DataTableValue,
} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {PrimeIcons} from "primereact/api";

import {Dialog} from "@components/ui";

import "./datatable.scss";

type HeaderConfig = {
    showSearch?: boolean;
    showCleanFilters?: boolean;
};

type DatatableProps<T> = {
    data: DataTableValue[];
    columns: ColumnConfig<T>[];
    createNewLabel?: string;
    createNewForm?: React.ReactNode;
    filtersConfig?: DataTableFilterMeta;
    headerConfig?: HeaderConfig;
    globalFilterFields?: string[];
    selectable?: boolean;
};

export interface ColumnConfig<T> {
    field: keyof T;
    header: string;
    body?: (rowData: T) => React.ReactNode;
    filter?: boolean;
    filterElement?: React.ReactNode;
    style?: React.CSSProperties;
}

export const Datatable = <T,>({
    createNewForm,
    createNewLabel,
    data,
    columns,
    filtersConfig,
    globalFilterFields,
    headerConfig,
    selectable = false,
}: DatatableProps<T>) => {
    const [filters, setFilters] = useState<DataTableFilterMeta>(
        filtersConfig || {}
    );
    const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [rowClick, setRowClick] = useState(true);
    const [selectedData, setSelectedData] = useState<T[]>([]);

    const onGlobalFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        setGlobalFilterValue(value);
        setFilters({...filters, global: {value, matchMode: "contains"}});
    };

    const renderHeader = () => {
        const {showCleanFilters, showSearch} = headerConfig || {};

        return (
            <div className="datatable__header">
                {createNewForm && (
                    <Button
                        icon={PrimeIcons.PLUS_CIRCLE}
                        label={createNewLabel}
                        onClick={() => setDialogVisible(true)}
                    />
                )}
                {showCleanFilters && (
                    <Button
                        type="button"
                        icon={PrimeIcons.FILTER_SLASH}
                        label="Limpiar filtros"
                        outlined
                        onClick={() => setFilters(filtersConfig || {})}
                    />
                )}
                {showSearch && (
                    <InputText
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder="Buscar..."
                    />
                )}
            </div>
        );
    };

    return (
        <>
            <PrimeReactDatatable
                emptyMessage="No se encontraron registros."
                filters={filters}
                globalFilterFields={globalFilterFields}
                header={renderHeader()}
                paginator
                rows={10}
                value={data}
                selection={selectedData}
                selectionMode={rowClick ? null : "checkbox"}
                onFilter={(e) => setFilters(e.filters)}
                onSelectionChange={(e: any) => setSelectedData(e.value)}
            >
                {selectable && (
                    <Column
                        selectionMode="multiple"
                        headerStyle={{width: "3rem"}}
                    ></Column>
                )}
                {columns &&
                    columns.map((col, idx) => (
                        <Column
                            body={col.body}
                            field={col.field as string}
                            filter={col.filter}
                            filterElement={col.filterElement}
                            header={col.header}
                            key={idx}
                            style={col.style}
                        />
                    ))}
            </PrimeReactDatatable>
            <Dialog
                dialogHeader={`${createNewLabel} - ${new Date().toLocaleTimeString()}`}
                isDialogVisible={isDialogVisible}
                maxWidth="780px"
                maximizable
                setIsDialogVisible={setDialogVisible}
            >
                {createNewForm}
            </Dialog>
        </>
    );
};
