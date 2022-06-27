import {useEffect, useMemo, useState} from "react";
import {TableResponseType} from "../../../api/types";
import {orderAPI} from "../../../api/table-api";

export const useData = () => {

    const [mockData, setMockData] = useState<TableResponseType[]>([])

    useEffect(() => {
        orderAPI.getOrder()
            .then((res) => {
                setMockData(res.data)
            })
    }, [])
    const data = useMemo(() => mockData, [])
    return {data}
}
