import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import OrderPage from '../components/order-page/OrderPage';
import OrdersTable from '../components/table/OrdersTable';
import { RoutesPaths } from './routes';

const AppRouter = () => {

    const [cellValue, setCellValue] = useState<any[]>([]);

    return (
        <Routes>
            <Route element={<OrdersTable setCellValue={setCellValue}/>} path={RoutesPaths.Home}/>
            <Route element={<OrderPage cellValue={cellValue}/>} path={RoutesPaths.OrderPage}/>
        </Routes>
    );


};

export default AppRouter;
