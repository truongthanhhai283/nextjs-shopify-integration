import { API_URL } from './../const';
import { ApiFetcherResults, ApiFetcherOptions } from './../../common/types/api';
import axios from "axios"

const fetchApi = async <T>({
    query,
    variables
}: ApiFetcherOptions
): Promise<ApiFetcherResults<T>> => {
    let resp
    try {
        resp = await axios.post(API_URL!, {
            query,
            variables,
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