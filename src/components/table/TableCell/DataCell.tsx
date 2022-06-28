import React, {FC} from 'react';
import s from './DataCell.module.scss'
import {convertingNameToInitials} from "../tools";
import Status from "./status/Status";

interface DataCellType {
    firstRowData?: string
    secondRowData?: string
    status?: string
    name?: string
    surname?: string
    patronymic?: string
}

const DataCell: FC<DataCellType> = (props) => {

    if (props.name && props.patronymic) {
        return (
            <div>
                <div>{props.firstRowData}</div>
                <div className={s.secondRowCell}>{convertingNameToInitials(props.name, props.surname, props.patronymic)}</div>
            </div>
        );
    }
    if (props.status) {
      return  <Status status={props.status}/>
    }

    return (
        <div>
            <div>{props.firstRowData}</div>
            <div className={s.secondRowCell}>{props.secondRowData}</div>
        </div>

    );


};

export default DataCell;
