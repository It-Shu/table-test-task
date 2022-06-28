import React, {FC} from 'react';
import s from "./DataCell.module.scss";

interface NumberAndDateType {
    id: number
    created_date: number
}

const NumberAndDate: FC<NumberAndDateType> = (props) => {

    const currentDate = new Date(props.created_date).toLocaleString()

    return (
        <div className={s.dataCell}>
            <div>{props.id}</div>
            <div>{currentDate}</div>
        </div>
    );
};

export default NumberAndDate;
