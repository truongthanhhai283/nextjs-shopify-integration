import { fetchApi, normalizeProduct, getAllProductsQuery } from "@framework/utils"
import { ProductConnection } from "@framework/schema"
import { Product } from '@common/types/product'

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<Product[]> => {
    const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery })

    const products = data.products.edges.map(({ node: product }) => {
        return normalizeProduct(product)
    }) ?? []

    return products
}

export default getAllProducts;