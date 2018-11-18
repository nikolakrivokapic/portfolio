import Actions from '../constants/actions';

const actionCreator = (page) => ({
    type: Actions.SET_CURRENT_PAGE,
    page,
});

export default actionCreator;
