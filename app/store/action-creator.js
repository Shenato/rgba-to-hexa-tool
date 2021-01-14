import { store } from "./index";

export function createBoundAction(type) {
  return (payload = null) => store.dispatch({ type, payload });
}
