import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";
import { getCheckoutId } from "@framework/utils";
import { checkoutLineItemsAdd } from "@framework/utils/mutation";

export default useAddItem

export const handler: MutationHook = {
    fetcherOptions: {
        query: checkoutLineItemsAdd,
    },
    fetcher: async ({ fetch, options, input }) => {
        const variables = {
            checkoutId: getCheckoutId(),
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