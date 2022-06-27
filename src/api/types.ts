interface OrderTerminalAccountType {
    name: string,
    oguid: string
}

interface CreatedUserType {
    surname: string,
    name: string,
    patronymic: string,
    oguid: string
}


export interface TableResponseType {
    id: number,
    oguid: string,
    status: string,
    order_type: OrderTerminalAccountType
    terminal: OrderTerminalAccountType
    account: OrderTerminalAccountType
    created_user: CreatedUserType
    created_date: number
}
