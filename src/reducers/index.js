import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import addProjectReducer from './addProjectReducer';

export default combineReducers({
  projects: projectsReducer,
  newProject: addProjectReducer
});
