import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import GetQueryParams from '../components/order-page/GetQueryParams';
import OrderPage from '../components/order-page/OrderPage';
import TableData from '../components/table/TableData';
import { RoutesPaths } from './routes';

const AppRouter = () => {

    const [cellValue, setCellValue] = useState<any[]>([]);

    return (
        <Routes>
            <Route element={<TableData setCellValue={setCellValue}/>} path={RoutesPaths.Home}/>
            <Route element={<GetQueryParams cellValue={cellValue}/>} path={RoutesPaths.QueryParams}/>
            <Route element={<OrderPage />} path={RoutesPaths.OrderPageWithParams}/>
        </Routes>
    );


};

export default AppRouter;
