import {useMemo} from "react";

import {ColumnConfig} from "../types/column";

const useTableColumns = <T,>(columns: ColumnConfig<T>[]) => {
    const tableColumns = useMemo(() => columns, [columns]);

    return {tableColumns};
};

export default useTableColumns;
