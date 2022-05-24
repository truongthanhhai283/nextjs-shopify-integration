import { ImageEdge, MoneyV2, Product as ShopifyProduct, ProductOption } from "./../schema.d";
import { Product } from '@common/types/product'

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) => {
    return edges.map(({ node: { originalSrc: url, ...rest } }) => {
        return {
            url: `/images/${url}`,
            ...rest
        }
    })
}

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => (
    {
        value: +amount,
        currencyCode
    }
)

const normalizeProductOption = ({ id, values, name: displayName }: ProductOption) => {
    const normalized = {
        id, displayName,
        values: values.map((value) => {
            let output: any = {
                label: value
            }

            // color
            // colour
            if (displayName.match(/color?r/gi)) {
                output = {
                    ...output,
                    hexColor: value
                }
            }
            return output
        })
    }
    return normalized
}

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
    const { id, title: name, handle, vendor, description, images: ImageConnection, priceRange, options, ...rest } = productNode;

    const product = {
        id,
        name,
        vendor,
        description,
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\+$/g, ""),
        images: normalizeProductImages(ImageConnection),
        price: normalizeProductPrice(priceRange.minVariantPrice),
        options: options ? options.filter(o => o.name !== "Title").map((o) => normalizeProductOption(o)) : [],
        ...rest
    };

    return product
}
