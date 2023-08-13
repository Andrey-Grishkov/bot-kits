import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHooks,
} from "react-redux";
import { store } from "..";

export type RootState = ReturnType<typeof store.getState>;

export const useDispatch = () => dispatchHook<typeof store.dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHooks