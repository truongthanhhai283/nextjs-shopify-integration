import axios from "axios"

type FetchParams = {
    query: string
}

const fetchApi = async ({ query }: FetchParams) => {
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
        console.log(resp);
    } catch (error) {
        // ?? is checking if first left hand expression is null or undefined -> if it is go with right expression
        // || is checking if first left hand expression is null, undefined, "", 0, false
        throw new Error(error ?? "Error")
    }

    return resp
}

export default fetchApi