import { action } from 'typesafe-actions'

export const FETCH_ROUTER_STATE = '[Request] Fetch Router State'

export const fetchRouterStateRequest = (routerState: string) => action(FETCH_ROUTER_STATE, { data: routerState })

export type FetchRouterStateRequestAction = ReturnType<typeof fetchRouterStateRequest>
