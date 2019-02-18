import { combineReducers } from 'redux';

import { changeStyle } from './changeStyle.reducer';
import { changeWeight } from './changeWeight.reducer';
import { changeUnderline } from './changeUnderline.reducer';

const mainreducers = combineReducers({
    style: changeStyle,
    weight: changeWeight,
    underline: changeUnderline,
});

export const rootReducer = (state, action) => {
    return mainreducers(state, action);
};
