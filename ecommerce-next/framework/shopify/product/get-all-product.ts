import fetchApi from "@framework/utils/fetch-api"
import getAllProductsQuery from "@framework/utils/queries/get-all-products"
import { ProductConnection } from "@framework/schema"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
    const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery })

    const products = data.data.products.edges.map(({ node: product }) => {
        return product
    }) ?? []

    return products

}

export default getAllProducts;