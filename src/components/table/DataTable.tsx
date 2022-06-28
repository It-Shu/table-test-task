import {CustomColumn} from "./types";
import React, {useMemo} from "react";
import Table from "./Table";
import {useData} from "./hooks/useData";
import {TableResponseType} from "../../api/types";
import NumberAndDate from "./TableCell/NumberAndDate";
import DataCell from "./TableCell/DataCell";
import s from './TableCell/DataCell.module.scss'

function DataTable() {

    const {mockData} = useData()

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
                accessor: 'order_type',
                Cell: ({row}) => {
                    return <div className={s.dataCell}>
                        <DataCell
                            surname={row.original.created_user.surname}
                            name={row.original.created_user.name}
                            patronymic={row.original.created_user.patronymic}
                            firstRowData={row.original.order_type.name}
                        />
                    </div>
                }
            },
            {
                Header: 'Аккаунт/Терминал',
                accessor: 'account',
                Cell: ({row}) => {
                    const ellipsis = row.original.account.name.substring(0,6) + '...'

                    return <div className={s.dataEllipsis}>
                        <DataCell firstRowData={row.original.account.name} secondRowData={row.original.terminal.name}/>
                    </div>
                }
            },
            {
                Header: 'Статус',
                accessor: 'status',
                Cell: ({row}) => {
                    return <div className={s.dataCell}>
                        <DataCell status={row.original.status}/>
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

