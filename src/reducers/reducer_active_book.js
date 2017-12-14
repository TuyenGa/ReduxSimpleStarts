const defaultState = {
    title: 'This is default book'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SELECT_THIS_BOOK':
            return action.term;

        default:
            return state;
    }
}