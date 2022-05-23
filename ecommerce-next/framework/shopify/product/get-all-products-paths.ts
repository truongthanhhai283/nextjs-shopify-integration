import { Product } from './../../common/types/product';
import { ApiConfig } from './../../common/types/api';

type ReturnType = {
    products: Pick<Product, "slug">[]
}

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
    return {
        products: [
            { slug: "cool-hat" },
            { slug: "t-shirt" },
            { slug: "lightweight-jacket" },
        ]
    }
}

export default getAllProductsPaths