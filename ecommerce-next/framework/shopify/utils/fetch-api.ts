import { ApiFetcherResults, ApiFetcherOptions } from './../../common/types/api';
import axios from "axios"

const fetchApi = async <T>({
    url,
    query }: ApiFetcherOptions
): Promise<ApiFetcherResults<T>> => {
    let resp
    try {
        resp = await axios.post(url, {
            query,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        // ?? is checking if first left hand expression is null or undefined -> if it is go with right expression
        // || is checking if first left hand expression is null, undefined, "", 0, false
        throw new Error(error, "Error")
    }

    return resp.data
}

export default fetchApi