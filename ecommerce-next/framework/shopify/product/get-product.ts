import { normalizeProduct } from './../utils/normalize';
import { Variables } from './../../common/types/api';
import { ApiConfig } from '../../common/types/api';
import { getProductQuery } from '@framework/utils';
import { Product as ShopifyProduct } from '@framework/schema';
import { Product } from '@common/types';

type FetchType = {
    productByHandle: ShopifyProduct
}

type ReturnType = {
    product: Product | null
}

const getProduct = async (options: { config: ApiConfig, variables?: Variables }): Promise<ReturnType> => {
    const { config, variables } = options
    const { data } = await config.fetch<FetchType>({
        query: getProductQuery,
        variables
    })

    const { productByHandle } = data

    return {
        product: productByHandle ? normalizeProduct(productByHandle) : null
    }
}

export default getProduct