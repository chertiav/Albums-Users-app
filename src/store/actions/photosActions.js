import ACTION_TYPES from './actionsTypes';

	//Getting PHOTOS
		export const fetchAllPhotosAction = (payload) => ({
				type: ACTION_TYPES.GET_ALBUM_PHOTOS_ACTION,
				payload
		})
		export const fetchAllPhotosRequest = () => ({
				type: ACTION_TYPES.GET_ALBUM_PHOTOS_REQUEST,
		})
		export const fetchAllPhotosSuccess = (payload) =>( {
				type: ACTION_TYPES.GET_ALBUM_PHOTOS_SUCCESS,
				payload
		})
		export const fetchAllPhotosError = (payload) => ({
				type: ACTION_TYPES.GET_ALBUM_PHOTOS_ERROR,
				payload
		})