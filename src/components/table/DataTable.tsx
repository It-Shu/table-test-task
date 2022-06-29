import {CustomColumn} from "./types";
import React, {useMemo} from "react";
import Table from "./Table";
import {useData} from "./hooks/useData";
import {TableResponseType} from "../../api/types";
import NumberAndDate from "./TableCell/cell-components/NumberAndDate";
import AccountAndTerminal from "./TableCell/cell-components/AccountAndTerminal";
import s from './TableCell/cell-components/DataCell.module.scss'
import Status from "./TableCell/cell-components/Status";
import OrderTypeAndAuthor from "./TableCell/cell-components/OrderTypeAndAuthor";

function DataTable() {

    const {mockData} = useData()

    const staticColumns: CustomColumn<TableResponseType>[] =
        [
            {
                Header: 'Номер / Дата',
                accessor: 'id',
                Cell: ({row}) => {
                    return <NumberAndDate id={row.original.id} created_date={row.original.created_date}/>
                }

            },
            {
                Header: 'Тип задания / Автор',
                accessor: 'order_type',
                Cell: ({row}) => {
                    return <OrderTypeAndAuthor
                        surname={row.original.created_user.surname}
                        name={row.original.created_user.name}
                        patronymic={row.original.created_user.patronymic}
                        orderType={row.original.order_type.name}
                    />
                }
            },
            {
                Header: 'Аккаунт / Терминал',
                accessor: 'account',
                Cell: ({row}) => {
                    return <AccountAndTerminal firstRowData={row.original.account.name}
                                               secondRowData={row.original.terminal.name}/>

                }
            },
            {
                Header: 'Статус',
                accessor: 'status',
                Cell: ({row}) => {
                    return <div className={s.dataCellContainer}>
                        <Status status={row.original.status}/>
                    </div>

                }
            },
        ]

    const columns = useMemo(() => staticColumns, [staticColumns])
    const data = useMemo(() => mockData, [mockData])

    return <div>
        <Table data={data} columns={columns}/>
    </div>
}

export default DataTable;

