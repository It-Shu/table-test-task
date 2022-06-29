import React, {FC} from 'react';
import s from './Cell.module.scss'

interface DataCellType {
    firstRowData?: string
    secondRowData?: string
}

const AccountAndTerminal: FC<DataCellType> = (props) => {

    return (
        <div className={s.accountContainer}>
            <div className={s.dataEllipsis}>{props.firstRowData}</div>
            <div className={s.subInfoRow}>{props.secondRowData}</div>
        </div>

    );


};

export default AccountAndTerminal;
