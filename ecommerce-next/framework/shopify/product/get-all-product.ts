import axios from "axios"

const fetchApi = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`

    let resp
    try {
        resp = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
    } catch (error) {
        console.log(error);
    }

    return resp
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi()
    return products?.data
}

export default getAllProducts;