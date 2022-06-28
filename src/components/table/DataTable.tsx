import {CustomColumn} from "./types";
import React, {useMemo} from "react";
import Table from "./Table";
import {useData} from "./hooks/useData";
import {TableResponseType} from "../../api/types";
import NumberAndDate from "./TableCell/NumberAndDate";
import DataCell from "./TableCell/DataCell";

function DataTable() {

    const {paginateData, paginate, onSelectChangeHandler, currentPage, countPerPage} = useData()
    // const {data} = useData()

    const staticColumns: CustomColumn<TableResponseType>[] =
        [
            {
                Header: 'Номер/Дата',
                accessor: 'id',
                // Cell: data.map(d => (
                //     <NumberAndDate id={row.original.id} created_date={row.original.created_date}/>
                // ))
                Cell: ({row}) => {
                    return <NumberAndDate id={row.original.id} created_date={row.original.created_date}/>
                }

            },
            {
                Header: 'Тип задания/Автор',
                accessor:'order_type',
                // Cell: data.map(d => (
                //     <DataCell id={d.id} firstRowData={row.original.order_type.name} secondRowData={row.original.created_user.surname}/>
                // ))
                Cell: ({row}) => {
                    return <DataCell firstRowData={row.original.order_type.name} secondRowData={row.original.created_user.surname}/>
                }
            },
            {
                Header: 'Аккаунт/Терминал',
                accessor: 'account',
                // Cell: data.map(d => (
                //     <DataCell id={d.id} firstRowData={d.account.name} secondRowData={d.terminal.name}/>
                // ))
                Cell: ({row}) => {
                    return <DataCell firstRowData={row.original.account.name} secondRowData={row.original.terminal.name}/>
                }
            },
            {
                Header: 'Статус',
                accessor: 'status',
                // Cell: data.map(d => (
                //     <DataCell id={d.id} firstRowData={d.status}/>
                // ))
                Cell: ({row}) => {
                    return <DataCell  firstRowData={row.original.status}/>
                }
            },
        ]

    const columns = useMemo(() => staticColumns,[staticColumns])
    const ordersData = useMemo(() => paginateData,[paginateData])

    return <div>
        <Table data={ordersData} columns={columns}/>
        {/*<Pagination*/}
        {/*    totalCount={paginateData.length}*/}
        {/*    currentPage={currentPage}*/}
        {/*    countPerPage={countPerPage}*/}
        {/*    onChange={paginate}*/}
        {/*/>*/}
    </div>
}

export default DataTable;

