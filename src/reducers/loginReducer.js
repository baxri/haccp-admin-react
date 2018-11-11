
const initialState = {
    auth: false,
    token: null,
    loading: true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INIT_LOGIN':
            return { ...state, auth: action.payload, loading: false };
            break;
        case 'LOGIN':
            return { ...state, auth: true, token: action.payload };
            break;
        case 'LOGOUT':
            return { ...state, auth: false, token: null };
            break;
        default:
            return state;
    }
}