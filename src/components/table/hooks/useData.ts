import {useEffect, useState} from "react";
import {TableResponseType} from "../../../api/types";
import {orderAPI} from "../../../api/table-api";

export const useData = () => {

    const [mockData, setData] = useState<TableResponseType[]>([])
    // const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [countPerPage, setCountPerPage] = useState<number | string>(10)

    useEffect(() => {
        // setLoading(true)
        orderAPI.getOrder()
            .then((res) => {
                setData(res.data)
                // setLoading(false)
            })
    }, [])

    // Find current number of orders on the page
    const lastOrderIndex = currentPage * +(countPerPage)
    const firstOrderIndex = lastOrderIndex - +(countPerPage)
    const paginateData = mockData.slice(firstOrderIndex, lastOrderIndex)

    // Change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    // Show selected current order count
    const onSelectChangeHandler = (option: string) => {
        setCountPerPage(option)
        setCurrentPage(1)
    }

    return {paginateData, paginate, onSelectChangeHandler, currentPage, countPerPage}
    // return {data}
}
