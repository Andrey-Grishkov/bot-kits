import { combineReducers } from "redux";
//import vkSvg from "../images/icons/vk.svg";
//import facebookSvg from "../images/icons/facebook.svg";
//import odnoklassnikiSvg from "../images/icons/odnoklassniki.svg";
import { buttonsHardCodNikit, CHENGE_ITEMS_STATE_SOCIAL } from "../utils/constants";
import { IchegeItemsSocialAction } from './actions';

interface IsocialButtonsState {
  href: string;
  name: string;
  variant: string;
  chosen: string;
}

const socialButtonReducer = (
  state = buttonsHardCodNikit,
  action: IchegeItemsSocialAction
): Array<IsocialButtonsState> => {
  switch (action.type) {
    case CHENGE_ITEMS_STATE_SOCIAL: {
      return state.map((item) => {

        if (action.name === item.name){
            return { ...item, variant: "active", chosen: item.name };
        } else {
            return { ...item, variant: "inactive", chosen: "" };

        }
      });
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  socialButtons: socialButtonReducer,
  visibility: visibilityReducer
});

import visibilityReducer from "./visibilitySlice";

export type RootState = ReturnType<typeof rootReducer>;
