import React, {FC} from 'react';
import s from './DataCell.module.scss'
interface DataCellType {
    firstRowData: string
    secondRowData?: string
}

const DataCell: FC<DataCellType> = (props) => {

    return (

        <div className={s.dataCell}>
            <div>{props.firstRowData}</div>
            <div>{props.secondRowData}</div>
        </div>

    );
};

export default DataCell;
