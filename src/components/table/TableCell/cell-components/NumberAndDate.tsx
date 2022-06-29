import React, {FC} from 'react';
import { convertingDateDataToCurrentDate } from '../../tools';
import s from "./DataCell.module.scss";

interface NumberAndDateType {
    id: number
    created_date: number
}

const NumberAndDate: FC<NumberAndDateType> = (props) => {
    const numberOfId = `№${props.id}`
    return (
        <div className={s.dataCellContainer}>
            <div>{numberOfId}</div>
            <div className={s.subInfoRow}>{convertingDateDataToCurrentDate(props.created_date)}</div>
        </div>
    );
};

export default NumberAndDate;
