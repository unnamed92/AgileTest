import { CHANGE_STYLE } from '../actions/changeStyle.action';

export function changeStyle(state=false, action) {
    switch (action.type) {
        case CHANGE_STYLE: {
            return !state;
        }
        default:
            return state;
    }
}
