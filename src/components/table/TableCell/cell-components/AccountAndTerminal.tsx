import React, {FC} from 'react';
import s from './DataCell.module.scss'

interface DataCellType {
    firstRowData?: string
    secondRowData?: string
}

const AccountAndTerminal: FC<DataCellType> = (props) => {

    return (
        <div className={s.accountContainer}>
            <div className={s.dataEllipsis}>{props.firstRowData}</div>
            <div className={s.secondRowCell}>{props.secondRowData}</div>
        </div>

    );


};

export default AccountAndTerminal;
