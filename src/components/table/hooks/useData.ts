import {useEffect, useState} from "react";
import {TableResponseType} from "../../../api/types";
import {orderAPI} from "../../../api/table-api";

export const useData = () => {

    const [mockData, setData] = useState<TableResponseType[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        orderAPI.getOrder()
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
    }, [])


    return {mockData, loading}
}
