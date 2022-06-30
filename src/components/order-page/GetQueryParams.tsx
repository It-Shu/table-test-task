import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { RoutesPaths } from '../../routes/routes';
import OrderPage from "./OrderPage";

interface GetQueryParamsType {
    cellValue: any[]
}

const GetQueryParams = ({cellValue}: GetQueryParamsType) => {

    const [active, setActive] = useState(false)

    const numberOfOrder = cellValue[0].value
    const orderType = cellValue[1].value.name
    const account = cellValue[2].value.name
    const status = cellValue[3].value

    useEffect(()=>{
        setActive(true)
    },[])

    return (
        <div>
            {active ? <Navigate to={`${RoutesPaths.OrderPage}/${numberOfOrder}/${orderType}/${account}/${status}`} /> : <OrderPage />}
        </div>
    );
};

export default GetQueryParams;
