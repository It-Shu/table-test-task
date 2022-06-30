import React from 'react';
import {HeaderGroup, Row, useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect} from 'react-table'
import {CustomColumn} from "./types";
import s from './Table.module.scss'
import IdFilter from "./filter-table/IdFilter";
import Pagination from "./pagination/Pagination";
import {Link} from "react-router-dom";
import {RoutesPaths} from "../../routes/routes";

interface TableProps<T extends object> {
    columns: ReadonlyArray<CustomColumn<T>>;
    data: ReadonlyArray<T>;
    setCellValue: (value: any[]) => void

}

function Table<T extends object>({columns, data, setCellValue}: TableProps<T>) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable<T>({columns, data},
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
    )

    const {pageIndex, globalFilter, pageSize} = state

    const getCellValue = (cell: any[]) => {
        setCellValue(cell)
    }

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

                <tbody {...getTableBodyProps()} className={s.tableBody}>
                {page.map(row => {
                    prepareRow(row);
                    return <TableRow row={row} key={row.id}/>
                })
                }
                </tbody>
            </table>

            <Pagination
                previousPage={previousPage}
                nextPage={nextPage}
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                goToPage={gotoPage}
                pageCount={pageCount}
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
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
        return <tr onClick={() => getCellValue(props.row.cells)} {...props.row.getRowProps()}>
            {props.row.cells.map(cell => {
                return <td {...cell.getCellProps()} >
                    <Link  to={RoutesPaths.QueryParams}
                          className={s.link}>{cell.render('Cell')}</Link>
                </td>;
            })}
        </tr>

    }

}

export default Table;
