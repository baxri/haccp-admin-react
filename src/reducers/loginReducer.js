
const initialState = {
    login: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'MAKE_LOGIN':
            return { ...state, ...{ login: true } };
            break;
        default:
            return state;
    }
}