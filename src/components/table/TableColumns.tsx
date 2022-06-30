import {CustomColumn} from "./types";
import {TableResponseType} from "../../api/types";
import NumberAndDate from "./cell-components/NumberAndDate";
import OrderTypeAndAuthor from "./cell-components/OrderTypeAndAuthor";
import AccountAndTerminal from "./cell-components/AccountAndTerminal";
import s from "./cell-components/Cell.module.scss";
import Status from "./cell-components/Status";
import React from "react";

export const staticColumns: CustomColumn<TableResponseType>[] =
    [
        {
            Header: 'Номер / Дата',
            accessor: 'id',
            Cell: ({row}) => {
                return <NumberAndDate id={row.original.id} created_date={row.original.created_date}/>
            },

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
                return <AccountAndTerminal account={row.original.account.name}
                terminal={row.original.terminal.name}/>
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

