
const initialState = {
    auth: false,
    token: null,
}


export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth: true, token: action.payload };
            break;
        default:
            return state;
    }
}