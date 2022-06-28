import React from 'react';
import {HeaderGroup, Row, useTable} from 'react-table'
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
        prepareRow,
    } = useTable({columns, data})

    return (
        <table {...getTableProps()} className={s.table}>
            <thead>
            {headerGroups.map(headerGroup =>
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(header => <TableHeader header={header} key={header.id}/>)}
                </tr>)}
            </thead>

            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return <TableRow row={row} key={row.id}/>;
            })}
            </tbody>
        </table>
    )

    function TableRow<T extends object>(props: { row: Row<T> }) {
        return <tr {...props.row.getRowProps()}>
            {props.row.cells.map(cell => {
                return <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                </td>;
            })}
        </tr>;
    }

    function TableHeader<T extends object>(props: { header: HeaderGroup<T> }) {
        return <th {...props.header.getHeaderProps()}>
            {props.header.render('Header')}
        </th>;
    }
}
export default Table;
