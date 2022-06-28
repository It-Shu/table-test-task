import React from 'react';
import s from "./DataCell.module.scss";
import {convertingNameToInitials} from "../../tools";

interface OrderTypeAndAuthorType {
    orderType: string
    name: string
    surname: string
    patronymic: string
}

const OrderTypeAndAuthor = (props: OrderTypeAndAuthorType) => {


    return (
        <div className={s.dataCell}>
            <div>{props.orderType}</div>
            <div className={s.secondRowCell}>{convertingNameToInitials(props.name, props.surname, props.patronymic)}</div>
        </div>
    );
};

export default OrderTypeAndAuthor;
