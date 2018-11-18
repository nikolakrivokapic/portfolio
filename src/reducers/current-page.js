import Actions from '../constants/actions';

export default function (currentState, action) {
    if (action.type === Actions.SET_CURRENT_PAGE) {
        return action.page;
    }

    return currentState;
}
