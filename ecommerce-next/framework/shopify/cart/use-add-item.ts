import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";

export default useAddItem

export const handler: MutationHook = {
    fetcherOptions: {
        query: `query {hello}`,
    },
    fetcher: async ({ fetch, options, input }) => {
        const variables = {
            checkoutId: null,
            lineItems: [{
                variantId: input.variantId,
                quantity: 1
            }]
        }

        const resp = await fetch({
            ...options,
            variables
        })
        return resp
    },
    useHook: ({ fetch }: any) => {
        return async (input: any) => {
            const response = fetch(input)
            return {
                output: response
            }
        }
    }
}