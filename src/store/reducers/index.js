import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';
import usersReducer from './usersReducer';


export default combineReducers({
	usersList: usersReducer,
	albumsList: albumsReducer,
	photosList: photosReducer,
})