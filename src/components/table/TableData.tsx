import React, {useMemo} from "react";
import Table from "./Table";
import {useData} from "./hooks/useData";
import {staticColumns} from "./TableColumns";

interface OrdersTableType {
    setCellValue: (value: any[]) => void
}

function TableData({setCellValue}: OrdersTableType) {

    const {mockData, loading} = useData()

    const columns = useMemo(() => staticColumns, [])
    const data = useMemo(() => mockData, [mockData])

    if (loading) return <div>LOADING...</div>

    return <div>
        <Table
            data={data}
            columns={columns}
            setCellValue={setCellValue}
        />
    </div>
}

export default TableData;

