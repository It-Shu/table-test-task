import React, {FC} from 'react';
import s from './DataCell.module.scss'
interface DataCellType {
    id?: number
    firstRowData: string
    secondRowData?: string
}

const DataCell: FC<DataCellType> = (props) => {

    return (

        <div key={props.id} className={s.dataCell}>
            <div>{props.firstRowData}</div>
            <div>{props.secondRowData}</div>
        </div>

    );
};

export default DataCell;
