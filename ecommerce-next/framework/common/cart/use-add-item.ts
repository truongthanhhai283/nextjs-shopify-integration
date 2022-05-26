import { handler } from '@framework/cart/use-add-item'
import { useHook } from '@common/ultils/use-hook'

const useAddItem = () => {
    // const hook = useHook((hooks) => hooks.cart.useAddItem)
    return handler.useHook()
}

export default useAddItem

