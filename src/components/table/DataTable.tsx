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
                Cell: ({row}) => {
                    return <NumberAndDate id={row.original.id} created_date={row.original.created_date}/>
                }

            },
            {
                Header: 'Тип задания/Автор',
                accessor:'order_type',
                Cell: ({row}) => {
                    return <DataCell
                        surname={row.original.created_user.surname}
                        name={row.original.created_user.name}
                        patronymic={row.original.created_user.patronymic}
                        firstRowData={row.original.order_type.name}
                    />
                }
            },
            {
                Header: 'Аккаунт/Терминал',
                accessor: 'account',
                Cell: ({row}) => {
                    return <DataCell firstRowData={row.original.account.name} secondRowData={row.original.terminal.name}/>
                }
            },
            {
                Header: 'Статус',
                accessor: 'status',
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

