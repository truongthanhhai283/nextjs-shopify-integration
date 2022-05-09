import { ImageEdge, Product as ShopifyProduct } from "./../schema.d";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) => {
    return edges.map(({ node: { originalSrc: url, ...rest } }) => {
        return {
            url: `/images/${url}`,
            ...rest
        }
    })
}

export const normalizeProduct = (productNode: ShopifyProduct): any => {
    const { id, title: name, handle, vendor, description, images: ImageConnection, ...rest } = productNode;

    const product = {
        id,
        name,
        vendor,
        description,
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\+$/g, ""),
        images: normalizeProductImages(ImageConnection),
        ...rest
    };

    return product
}
