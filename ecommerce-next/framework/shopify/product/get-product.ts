import { Variables } from './../../common/types/api';
import { ApiConfig } from '../../common/types/api';
import { getProductQuery } from '@framework/utils';
import { Product as ShopifyProduct } from '@framework/schema';

type FetchType = {
    productByHandle: ShopifyProduct
}

const getProduct = async (options: { config: ApiConfig, variables?: Variables }): Promise<any> => {
    const { config, variables } = options
    const { data } = await config.fetch<FetchType>({
        query: getProductQuery,
        url: config.apiUrl,
        variables
    })

    console.log(JSON.stringify(data.productByHandle, null, 2))

    return {
        product: {
            name: "Truong Thanh Hai",
            slug: "Truong Thanh Hai",
        }
    }
}

export default getProduct