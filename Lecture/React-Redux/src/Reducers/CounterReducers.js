let initialState = 0;

const Counter = (state = initialState, Action) => {
    switch (Action.type) {
        case 'inc':
            return state + 1;
        case 'Dec':
            return state - 1;
        case 'Reset':
            return state = 0;

        default:
            return state;
    }
}

export default Counter;