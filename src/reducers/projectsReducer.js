import { VIEW_PROJECTS } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case VIEW_PROJECTS:
        return{
            ...state,
            items: action.payload
        };
        default:
            return state;
    }
} 