import fetchApi from "@framework/utils/fetch-api"
import getAllProductsQuery from "@framework/utils/queries/get-all-products"

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi({ query: getAllProductsQuery })
    return products?.data
}

export default getAllProducts;