import { CHANGE_WEIGHT } from '../actions/changeWeight.action';

export function changeWeight(state=false, action) {
    switch (action.type) {
        case CHANGE_WEIGHT: {
            return !state;
        }
        default:
            return state;
    }
}
