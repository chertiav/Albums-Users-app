import ACTION_TYPES from "../actions/actionsTypes"

const initialState = {
	photos: [],
	isFetcing: false,
	error: null,
}

const photosReducer = (state = initialState, {type, payload}) => {
	switch (type) {
	//Geting
		case ACTION_TYPES.GET_ALBUM_PHOTOS_SUCCESS:
			return {
				...state,
				photos: payload,
				isFetching: false,
			}
		case ACTION_TYPES.GET_ALBUM_PHOTOS_REQUEST:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPES.GET_ALBUM_PHOTOS_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload
			}
		default: return state;
	}
}

export default photosReducer;