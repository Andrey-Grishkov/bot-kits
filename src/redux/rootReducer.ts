import { combineReducers } from "redux";
import visibilityReducer from "./visibilitySlice";

export const rootReducer = combineReducers({
    visibility: visibilityReducer
});

export type RootState = ReturnType<typeof rootReducer>;
