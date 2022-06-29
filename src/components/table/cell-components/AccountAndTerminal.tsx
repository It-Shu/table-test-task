import React, {FC} from 'react';
import s from './Cell.module.scss'

interface DataCellType {
    account?: string
    terminal?: string
}

const AccountAndTerminal: FC<DataCellType> = (props) => {

    return (
        <div className={s.accountContainer}>
            <div className={s.dataEllipsis}>{props.account}</div>
            <div className={s.subInfoRow}>{props.terminal}</div>
        </div>

    );


};

export default AccountAndTerminal;
