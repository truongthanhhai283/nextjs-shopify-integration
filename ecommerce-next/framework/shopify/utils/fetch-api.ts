import axios from "axios"

type FetcherParams = {
    query: string
}

type FetcherResults<T> = { data: T }

const fetchApi = async <T>({
    query }: FetcherParams
): Promise<FetcherResults<T>> => {
    const url = `http://localhost:4000/graphql`

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
        throw new Error(error ?? "Error")
    }

    return resp.data
}

export default fetchApi