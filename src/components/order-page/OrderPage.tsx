import React from 'react';
import {RoutesPaths} from "../../routes/routes";
import {useNavigate, useParams} from "react-router-dom";
import s from './OrderPage.module.scss'
import Status from "../table/cell-components/Status";


const OrderPage = () => {

    let navigate = useNavigate()
    const back = () => {
        navigate(RoutesPaths.Home)
    }

    const {id, order_page, account, status} = useParams()

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
                    <td>{id}</td>
                    <td>{order_page}</td>
                    <td>{account}</td>
                    <td><Status status={status}/></td>
                </tr>
                </tbody>
            </table>
        </>
    );
};

export default OrderPage;
