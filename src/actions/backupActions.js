import { get } from "../gateway/index";

export function loadBackups() {
    return async function (dispatch) {

        let backups = await get('/backups');

        dispatch({
            type: 'LOAD_BACKUPS',
            payload: backups,
        });
    }
}

