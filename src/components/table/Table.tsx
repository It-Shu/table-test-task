import React from 'react';
import {useTable} from 'react-table'
import {CustomColumn} from "./types";
import s from './Table.module.scss'

interface TableProps<T extends object> {
    columns: ReadonlyArray<CustomColumn<T>>;
    data: ReadonlyArray<T>;
}

function Table<T extends object>({columns, data}: TableProps<T>) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns, data})


    return (
        <table {...getTableProps()} className={s.table}>
            <thead >
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className={s.HeaderColumns}>
                    {
                        headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()} className={s.HeaderColumn}>{column.render('Header')}</th>
                        ))
                    }
                </tr>
            ))}

            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map((row) => {
                    prepareRow(row)
                    return <tr {...row.getRowProps()} className={s.BodyColumns}>
                        {
                            row.cells.map((cell) => {
                                return <td {...cell.getCellProps()} className={s.BodyColumn}>{cell.render('Cell')}</td>
                            })
                        }
                    </tr>
                })
            }

            </tbody>
        </table>
    );
}

export default Table;
