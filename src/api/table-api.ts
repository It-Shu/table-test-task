import axios from "axios";
import { TableResponseType } from "./types";

const baseURL = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220628T131758Z&X-Amz-Expires=86400&X-Amz-Signature=4c59cf8539a1cdc7b855fdcbcecb4e6ee36b284014eed95b693688239b65363d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22&x-id=GetObject'

export const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
})


export const orderAPI = {
    getOrder: () => axios
        .get<TableResponseType[]>(baseURL)

}
