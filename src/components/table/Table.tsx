import React from 'react';
import {HeaderGroup, Row, useTable, useSortBy, useGlobalFilter, usePagination} from 'react-table'
import {CustomColumn} from "./types";
import s from './Table.module.scss'
import IdFilter from "./filter-table/IdFilter";

interface TableProps<T extends object> {
    columns: ReadonlyArray<CustomColumn<T>>;
    data: ReadonlyArray<T>;
}

function Table<T extends object>({columns, data}: TableProps<T>) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable<T>({columns, data},
        useGlobalFilter,
        useSortBy,
        usePagination,
    )

    const { globalFilter } = state;

    return (
        <>
            <IdFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()} className={s.table}>
                <thead>
                {headerGroups.map(headerGroup =>
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((header) => <TableHeader key={header.id} header={header}/>)}
                    </tr>)}
                </thead>

                <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row);
                    return <TableRow row={row} key={row.id}/>;
                })}
                </tbody>
            </table>
            <div>
                <button onClick={()=> previousPage()}>Previous</button>
                <button onClick={()=> nextPage()}>Next</button>
            </div>
        </>
    )

    function TableHeader<T extends object>(props: { header: HeaderGroup<T> }) {
        return <th {...props.header.getHeaderProps(props.header.getSortByToggleProps())} className={s.tableTH}>
            {props.header.render('Header')}
            <span>
                    {props.header.isSorted ? (props.header.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
        </th>;
    }

    function TableRow<T extends object>(props: { row: Row<T> }) {
        return <tr {...props.row.getRowProps()}>
            {props.row.cells.map(cell => {
                return <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                </td>;
            })}
        </tr>;
    }
}

export default Table;
