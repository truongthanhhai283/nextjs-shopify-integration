import axios from "axios"

import getAllProductsQuery from "utils/queries/get-all-products"

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
        console.log(error);
    }

    return resp
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi({ query: getAllProductsQuery })
    return products?.data
}

export default getAllProducts;