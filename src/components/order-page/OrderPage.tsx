import React from 'react';
import {RoutesPaths} from "../../routes/routes";
import {useNavigate} from "react-router-dom";
import s from './OrderPage.module.scss'
import Status from "../table/cell-components/Status";

interface OrderPageType {
    cellValue: any[]
}

const OrderPage = ({cellValue}: OrderPageType) => {

    let navigate = useNavigate()
    const back = () => {
        navigate(RoutesPaths.Home)
    }
    const numberOfOrder = cellValue[0].value.toString()
    const orderType = cellValue[1].value.name
    const account = cellValue[2].value.name
    const status = cellValue[3].value
    return (
        <>
            <h1 className={s.title}>ORDER PAGE</h1>
            <div className={s.button}>
                <button onClick={back} className={s.backButton}>❮</button>
            </div>
            <table className={s.contentTable}>
                <thead>
                <tr className={s.headTR}>
                    <th>Номер</th>
                    <th>Тип задания</th>
                    <th>Аккаунт</th>
                    <th>Статус</th>
                </tr>
                </thead>
                <tbody className={s.tableBody}>
                <tr>
                    <td>{numberOfOrder}</td>
                    <td>{orderType}</td>
                    <td>{account}</td>
                    <td><Status status={status}/></td>
                </tr>
                </tbody>
            </table>
        </>
    );
};

export default OrderPage;
