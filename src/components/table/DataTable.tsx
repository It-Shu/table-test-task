import {CustomColumn} from "./types";
import {useMemo} from "react";
import Table from "./Table";
import {useData} from "./hooks/useData";

function DataTable() {
    

    const {data} = useData()
    const columns: CustomColumn[] = useMemo(() => [
        {
            Header: 'Номер/Дата',
            accessor: 'id' && 'created_date',
            Cell: data.map(d => (
                <div key={d.id + 1}>
                    <div>{d.id}</div>
                    <div>{d.created_date}</div>
                </div>
            ))
        },
        {
            Header: 'Тип задания/Автор',
            accessor: 'order_type' && 'created_user',
            Cell: data.map(d => (
                <div key={d.id + 1}>
                    <div>{d.order_type.name}</div>
                    <div>{d.created_user.name}</div>
                </div>
            ))
        },
        {
            Header: 'Аккаунт/Терминал',
            accessor: 'account' && 'terminal',
            Cell: data.map(d => (
                <div key={d.id + 1}>
                    <div>{d.account.name}</div>
                    <div>{d.terminal.name}</div>
                </div>
            ))
        },
        {
            Header: 'Статус',
            accessor: 'status',
            Cell: data.map(d => (
                <div key={d.id + 1}>
                    <div>{d.status}</div>
                </div>
            ))
        },
    ], [])

    return <Table data={data} columns={columns}/>

}

export default DataTable;

