import { CHENGE_ITEMS_STATE_SOCIAL } from '../utils/constants';

export interface IchegeItemsSocialAction {
    type: typeof CHENGE_ITEMS_STATE_SOCIAL,
    name: string
}

export const chegeItemsSocialAction = (name: string): IchegeItemsSocialAction => ({
    type: CHENGE_ITEMS_STATE_SOCIAL,
    name
}) 
