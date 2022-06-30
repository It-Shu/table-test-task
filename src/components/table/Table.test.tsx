import {render, screen} from '@testing-library/react';
import React from 'react';
import Table from './Table';
import {staticColumns} from "./TableColumns";
import NumberAndDate from "./cell-components/NumberAndDate";
import OrderTypeAndAuthor from "./cell-components/OrderTypeAndAuthor";
import AccountAndTerminal from "./cell-components/AccountAndTerminal";
import Status from "./cell-components/Status";

describe('Table', () => {


    it('should render Table columns', function () {
        const data: any[] = []
        const fn = jest.fn()
        render(<Table data={data} columns={staticColumns} setCellValue={fn}/>)

        expect(screen.getByText('Номер / Дата')).toBeInTheDocument();
        expect(screen.getByText('Аккаунт / Терминал')).toBeInTheDocument();
        expect(screen.getByText('Аккаунт / Терминал')).toBeInTheDocument();
        expect(screen.getByText('Статус')).toBeInTheDocument();
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


})
