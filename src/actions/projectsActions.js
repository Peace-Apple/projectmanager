import {VIEW_PROJECTS} from "./types"
export function getProjects(projects) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
            type: VIEW_PROJECTS,
            payload: projects
        });
    }, 2000);
        
    };
}