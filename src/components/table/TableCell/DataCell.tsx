import React, {FC} from 'react';
import s from './DataCell.module.scss'
interface DataCellType {
    firstRowData: string
    secondRowData?: string
    name?: string
    surname?: string
    patronymic?: string
}

const DataCell: FC<DataCellType> = (props) => {

    const initialsTransformation = (name: string, surname: string | undefined, patronymic: string): string => {
        const nameInitial = name.charAt(0)
        const patronymicInitial = patronymic.charAt(0)
        const initials = `${surname + ' ' + nameInitial + '.' + patronymicInitial + '.'}`
        return initials
    }

    if (props.name && props.patronymic) {
        return (
            <div className={s.dataCell}>
                <div>{props.firstRowData}</div>
                <div>{initialsTransformation(props.name, props.surname, props.patronymic)}</div>
            </div>
        );
    }

    return (
        <div className={s.dataCell}>
            <div>{props.firstRowData}</div>
            <div>{props.secondRowData}</div>
        </div>

    );
};

export default DataCell;
