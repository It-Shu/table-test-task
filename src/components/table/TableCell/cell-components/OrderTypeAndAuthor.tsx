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
        <div className={s.dataCellContainer}>
            <div>{props.orderType}</div>
            <div className={s.subInfoRow}>{convertingNameToInitials(props.name, props.surname, props.patronymic)}</div>
        </div>
    );
};

export default OrderTypeAndAuthor;
