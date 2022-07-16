import ACTION_TYPES from "../actions/actionsTypes"

const initialState = {
	albums: [],
	isFetcing: false,
	error: null,
}

const albumsReducer = (state = initialState, {type, payload}) => {
	switch (type) {
	//Geting all albums
	case ACTION_TYPES.GET_ALBUMS_SUCCESS:
		return {
			...state,
			albums: payload,
			isFetching: false,
		}
	case ACTION_TYPES.GET_ALBUMS_REQUEST:
		return {
			...state,
			isFetching: true
		}
	case ACTION_TYPES.GET_ALBUMS_ERROR:
		return {
			...state,
			isFetching: false,
			error: payload
		}
	//Getting all the user's albums
	case ACTION_TYPES.GET_ALL_USERS_ALBUMS_REQUEST:
		return {
			...state,
			isFetching: true
		}
	case  ACTION_TYPES.GET_ALL_USERS_ALBUMS_SUCCESS:
		return {
			...state,
			albums: payload,
			isFetching: false,
		}
	case ACTION_TYPES.GET_ALL_USERS_ALBUMS_ERROR:
		return {
			...state,
			isFetching: false,
			error: payload
		}
	default: return state;
	}
}
export default albumsReducer;
