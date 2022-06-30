import {render, screen} from '@testing-library/react';
import React from 'react';
import Table from './Table';
import {staticColumns} from "./TableColumns";
import NumberAndDate from "./cell-components/NumberAndDate";
import OrderTypeAndAuthor from "./cell-components/OrderTypeAndAuthor";
import AccountAndTerminal from "./cell-components/AccountAndTerminal";
import Status from "./cell-components/Status";
import IdFilter from "./filter-table/IdFilter";
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";

const setup = () => {
    const data: any[] = [
        {
            id: 256,
            status: 'new',
            order_type: {name: 'Music_show', oguid: ''},
            oguid: '',
            account: {name: 'Metallica', oguid: ''},
            terminal: {name: 'Music', oguid: ''},
            created_user: {name: 'James', surname: 'Hetfield', patronymic: 'M', oguid: ''},
            created_date: 1399423285602
        },
        {
            id: 3424,
            status: 'completed',
            order_type: {name: 'Delivery_box', oguid: ''},
            oguid: '',
            account: {name: 'FedEX', oguid: ''},
            terminal: {name: 'Delivery', oguid: ''},
            created_user: {name: 'James', surname: 'Brown', patronymic: 'B', oguid: ''},
            created_date: 1465977093594
        },
    ]
    const setCellValue = jest.fn()
    render(
        <Router>
            <Table data={data} columns={staticColumns} setCellValue={setCellValue}/>
        </Router>
    )
}

describe('Table', () => {



    it('should render Table columns', function () {
        setup()

        expect(screen.getByText('Номер / Дата')).toBeInTheDocument();
        expect(screen.getByText('Аккаунт / Терминал')).toBeInTheDocument();
        expect(screen.getByText('Аккаунт / Терминал')).toBeInTheDocument();
        expect(screen.getByText('Статус')).toBeInTheDocument();

    });

    it('should render Table rows', function () {
        setup()

        expect(screen.getByText('№3424')).toBeInTheDocument();
        expect(screen.getByText('6/15/2016, 10:51:33')).toBeInTheDocument();
        expect(screen.getByText('Delivery')).toBeInTheDocument();
        expect(screen.getByText('FedEX')).toBeInTheDocument();
        expect(screen.getByText('Brown J.B.')).toBeInTheDocument();
    });



    it('should render number and date', function () {
        const id = 1231
        const created_date = 1399423285602

        render(<NumberAndDate id={id} created_date={created_date}/>)

        expect(screen.getByText('№1231')).toBeInTheDocument();
        expect(screen.getByText('5/7/2014, 3:41:25')).toBeInTheDocument();
    });

    it('should render type order and author', function () {

        const name = 'Павел'
        const surname = 'Дуров'
        const patronymic = 'Валерьевич'
        const orderType = 'Безвозвратное изъятие документов'

        render(<OrderTypeAndAuthor
            surname={surname}
            name={name}
            patronymic={patronymic}
            orderType={orderType}
        />)

        expect(screen.getByText('Безвозвратное изъятие документов')).toBeInTheDocument();
        expect(screen.getByText('Дуров П.В.')).toBeInTheDocument();
    });

    it('should render account and terminal', function () {

        const account = 'React'
        const terminal = 'Facebook'

        render(<AccountAndTerminal account={account} terminal={terminal}/>)

        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Facebook')).toBeInTheDocument();
    });

    it('should render status', function () {

        const status = 'in progress'
        render(<Status status={status}/>)
        expect(screen.getByText('in progress')).toBeInTheDocument();

    });

    it('should filter row', function () {
        setup()
        const search = screen.getByTestId('search')

        const filterId = 0
        const setFilter = jest.fn()

        render(<IdFilter filter={filterId} setFilter={setFilter}/>)
        userEvent.type(search, '256')
        expect(search).toBeInTheDocument()
        expect(screen.getByText('№256')).toBeInTheDocument();
        expect(screen.getByText('5/7/2014, 3:41:25')).toBeInTheDocument();
        expect(screen.getByText('Music')).toBeInTheDocument();
        expect(screen.getByText('Metallica')).toBeInTheDocument();
        expect(screen.getByText('Hetfield J.M.')).toBeInTheDocument();

        expect(screen.queryByText('№3424')).not.toBeInTheDocument();
        expect(screen.queryByText('6/15/2016, 10:51:33')).not.toBeInTheDocument();
        expect(screen.queryByText('Delivery')).not.toBeInTheDocument();
        expect(screen.queryByText('FedEX')).not.toBeInTheDocument();
        expect(screen.queryByText('Brown J.B.')).not.toBeInTheDocument();
    });

})
