import { CHANGE_UNDERLINE } from '../actions/changeUnderline.action';


export function changeUnderline(state=false, action) {
    switch (action.type) {
        case CHANGE_UNDERLINE: {
            return !state;
        }
        default:
            return state;
    }
}
