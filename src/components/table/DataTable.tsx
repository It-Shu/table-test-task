import {CustomColumn} from "./types";
import {useMemo} from "react";
import Table from "./Table";
import {useData} from "./hooks/useData";
import DataCell from "./TableCell/DataCell";
import NumberAndDate from "./TableCell/NumberAndDate";

function DataTable() {

    const {mockData} = useData()
    const columns: CustomColumn[] = [
        {
            Header: 'Номер/Дата',
            accessor: 'id',
            Cell: mockData.map(d => (
                <NumberAndDate id={d.id} created_date={d.created_date}/>
            ))
        },
        {
            Header: 'Тип задания/Автор',
            accessor: 'order_type',
            Cell: mockData.map(d => (
                <DataCell id={d.id} firstRowData={d.order_type.name} secondRowData={d.created_user.name}/>
            ))
        },
        {
            Header: 'Аккаунт/Терминал',
            accessor: 'account',
            Cell: mockData.map(d => (
                <DataCell id={d.id} firstRowData={d.account.name} secondRowData={d.terminal.name}/>
            ))
        },
        {
            Header: 'Статус',
            accessor: 'status',
            Cell: mockData.map(d => (
                <DataCell id={d.id} firstRowData={d.status}/>
            ))
        },
    ]

    const mockColumns = useMemo(() => columns, [])
    return <Table data={mockData} columns={columns}/>

}

export default DataTable;

