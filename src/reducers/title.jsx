import { SET_TITLE } from './../actions/index.jsx';
const initialState = 'From State';

const titleReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TITLE:
            return action.title;
        default:
            return state;
    }
};

export default titleReducer;