import React, {FC} from "react";

import {Datatable} from "@components/ui";
import {ColumnConfig} from "@components/ui/datatable/types";

import {products, productTableColumns} from "@pages/products/data";
import {Product} from "@pages/products/types";

type ProductsStepProps = {
    aditionalColumns: ColumnConfig<any>[];
};

export const ProductsSteps: FC<ProductsStepProps> = ({aditionalColumns}) => {
    const columns: ColumnConfig<Product>[] = [
        ...productTableColumns,
        ...aditionalColumns,
    ];

    return <Datatable<Product> columns={columns} data={products} />;
};
