
const initialState = {
    loading: true,
    list: [],
    controles: {},
    pictures: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOAD_BACKUPS':
            return { ...state, list: action.payload, loading: false };
            break;
        default:
            return state;
    }
}