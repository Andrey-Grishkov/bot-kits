import {combineReducers} from "redux";
import  vkSvg  from '../images/icons/vk.svg';
import  facebookSvg  from '../images/icons/facebook.svg';
import  odnoklassnikiSvg  from '../images/icons/odnoklassniki.svg';
import { buttonsHardCodNikit } from "../utils/constants";

interface IsocialButtonsState {
    href: string,
    name: string
}

const socialButtonsState: Array<IsocialButtonsState> = buttonsHardCodNikit

const socialButtonReducer = (): Array<IsocialButtonsState> => (socialButtonsState)

export const rootReducer = combineReducers({
    socialButtons: socialButtonReducer
})
