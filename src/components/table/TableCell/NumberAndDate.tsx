import React, {FC} from 'react';
import { convertingDateDataToCurrentDate } from '../tools';
import s from "./DataCell.module.scss";

interface NumberAndDateType {
    id: number
    created_date: number
}

const NumberAndDate: FC<NumberAndDateType> = (props) => {

    return (
        <div className={s.dataCell}>
            <div>{props.id}</div>
            <div className={s.secondRowCell}>{convertingDateDataToCurrentDate(props.created_date)}</div>
        </div>
    );
};

export default NumberAndDate;
