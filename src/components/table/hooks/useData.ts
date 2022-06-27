import {useEffect, useMemo, useState} from "react";
import {TableResponseType} from "../../../api/types";
import {orderAPI} from "../../../api/table-api";

export const useData = () => {

    const [data, setData] = useState<TableResponseType[]>([])

    useEffect(() => {
        orderAPI.getOrder()
            .then((res) => {
                setData(res.data)
            })
    }, [])
    const mockData = useMemo(() => data, [data])
    return {mockData}
}
