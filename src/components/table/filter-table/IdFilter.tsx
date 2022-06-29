import React, {ChangeEvent} from 'react';
import {FilterValue} from "react-table";
import s from './IdFilter.module.scss'
interface GlobalFilterType {
    filter: string | number
    setFilter: (value: FilterValue) => void
}

const IdFilter = ({filter, setFilter}: GlobalFilterType) => {

    const getFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value)
    }

    return (
        <span className={s.filterContainer}>
            Поиск номера: {' '}
            <input type={"number"} className={s.filterInput} value={filter || ''} onChange={getFilterValue} placeholder={'введите номер...'}/>
        </span>
    );
};

export default IdFilter;
