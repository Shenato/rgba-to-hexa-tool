import { createBoundAction } from "../action-creator";
import types from "./types";

export const setState1 = createBoundAction(types.setState1);
export const setState2 = createBoundAction(types.setState2);
