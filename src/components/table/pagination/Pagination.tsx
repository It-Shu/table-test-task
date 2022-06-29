import React, {ChangeEvent} from 'react';
import s from './Pagination.module.scss'

interface PaginationType {
    previousPage: () => void
    nextPage: () => void
    canPreviousPage: boolean
    canNextPage: boolean
    pageIndex: number
    pageOptions: number[]
    goToPage: (updater: number | ((pageIndex: number) => number)) => void
    pageCount: number
    pageSize: number
    setPageSize: (pageSize: number) => void
}

const PAGE_COUNT = [5,10,25,50,100]

const Pagination = (
    {
        previousPage,
        nextPage,
        canNextPage,
        canPreviousPage,
        pageIndex,
        pageOptions,
        pageCount,
        goToPage,
        pageSize,
        setPageSize,
    }: PaginationType
) => {

    const getPreviousPage = () => {
        previousPage()
    }

    const getNextPage = () => {
        nextPage()
    }

    const getFirstPage = () => {
        goToPage(0)
    }

    const getLastPage = () => {
        goToPage(pageCount - 1)
    }

    const getPageSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(e.currentTarget.value))
    }

    return (
        <div className={s.paginationContainer}>
            <span className={s.pageIndex}>
                Страница{' '}
                <strong>{pageIndex + 1} из {pageOptions.length}</strong>{' '}
            </span>

            <div className={s.buttonsContainer}>
                <button onClick={getFirstPage} disabled={!canPreviousPage} className={s.paginationButton}>❮❮</button>
                <button onClick={getPreviousPage} disabled={!canPreviousPage} className={s.paginationButton}>❮</button>
                <button onClick={getNextPage} disabled={!canNextPage} className={s.paginationButton}>❯</button>
                <button onClick={getLastPage} disabled={!canNextPage} className={s.paginationButton}>❯❯</button>
            </div>
            по
            <select value={pageSize} onChange={getPageSize} className={s.selectPageSize}>
                {
                    PAGE_COUNT.map(pageSize => (
                        <option value={pageSize} key={pageSize}>
                            {pageSize}
                        </option>
                    ))
                }
            </select>
            Записей
        </div>
    );
};

export default Pagination;
