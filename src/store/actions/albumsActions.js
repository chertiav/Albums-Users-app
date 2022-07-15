import ACTION_TYPES from './actionsTypes';

	//Get All
		export const fetchAllAlbumsAction = () => ({
				type: ACTION_TYPES.GET_ALBUMS_ACTION,
		})
		export const fetchAllAlbumsRequest = () => ({
				type: ACTION_TYPES.GET_ALBUMS_REQUEST,
		})
		export const fetchAllAlbumsSuccess = (payload) =>( {
				type: ACTION_TYPES.GET_ALBUMS_SUCCESS,
				payload
		})
		export const fetchAllAlbumsError = (payload) => ({
				type: ACTION_TYPES.GET_ALBUMS_ERROR,
				payload
		})