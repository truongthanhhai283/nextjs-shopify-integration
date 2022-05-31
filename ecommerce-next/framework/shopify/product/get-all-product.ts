import { normalizeProduct, getAllProductsQuery } from "@framework/utils"
import { ProductConnection } from "@framework/schema"
import { Product } from '@common/types/product'
import { ApiConfig } from './../../common/types/api';

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
    const { data } = await config.fetch<ReturnType>({ query: getAllProductsQuery })

    const products = data.products.edges.map(({ node: product }) => {
        return normalizeProduct(product)
    }) ?? []

    return products
}

export default getAllProducts;