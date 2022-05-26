import { useApiProvider } from "@common"
import { MutationHook } from "@common/types/hooks"
import { ApiHooks } from "@common/types/api"

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
    const { hooks } = useApiProvider()
    return fn(hooks)
}