import {NEW_PROJECT} from "./types"

export function addProject(project) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
            type: NEW_PROJECT,
            payload: project
        });
    }, 2000);
        
    };
}