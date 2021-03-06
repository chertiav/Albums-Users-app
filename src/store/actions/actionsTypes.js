const ACTION_TYPES = {
	//USERS
		//Getting USERS ALL
		GET_USERS_ACTION: 'GET_USERS_ACTION',
		GET_USERS_REQUEST: 'GET_USERS_REQUEST',
		GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
		GET_USERS_ERROR: 'GET_USERS_ERROR',
		//Creating
		POST_USER_ACTION: 'POST_USER_ACTION',
		POST_USER_REQUEST: 'POST_USER_REQUEST',
		POST_USER_SUCCESS: 'POST_USER_SUCCESS',
		POST_USER_ERROR: 'POST_USER_ERROR',
		//Updating
		PUT_USER_ACTION: 'PUT_USER_ACTION',
		PUT_USER_REQUEST: 'PUT_USER_REQUEST',
		PUT_USER_SUCCESS: 'PUT_USER_SUCCESS',
		PUT_USER_ERROR: 'PUT_USER_ERROR',
		//Deliting
		DELETE_USER_ACTION: 'DELETE_USER_ACTION',
		DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
		DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
		DELETE_USER_ERROR: 'DELETE_USER_ERROR',

	//ALBUMS
		//Getting albums ALL
		GET_ALBUMS_ACTION: 'GET_ALBUMS_ACTION',
		GET_ALBUMS_REQUEST: 'GET_ALBUMS_REQUEST',
		GET_ALBUMS_SUCCESS: 'GET_ALBUMS_SUCCESS',
		GET_ALBUMS_ERROR: 'GET_ALBUMS_ERROR',
		//Getting all the user's albums
		GET_ALL_USERS_ALBUMS_ACTION: 'GET_ALL_USERS_ALBUMS_ACTION',
		GET_ALL_USERS_ALBUMS_REQUEST: 'GET_ALL_USERS_ALBUMS_REQUEST',
		GET_ALL_USERS_ALBUMS_SUCCESS: 'GET_ALL_USERS_ALBUMS_SUCCESS',
		GET_ALL_USERS_ALBUMS_ERROR: 'GET_ALL_USERS_ALBUMS_ERROR',

	//PHOTOS
		//Getting PHOTOSS
		GET_ALBUM_PHOTOS_ACTION: 'GET_ALBUM_PHOTOS_ACTION',
		GET_ALBUM_PHOTOS_REQUEST: 'GET_ALBUM_PHOTOS_REQUEST',
		GET_ALBUM_PHOTOS_SUCCESS: 'GET_ALBUM_PHOTOS_SUCCESS',
		GET_ALBUM_PHOTOS_ERROR: 'GET_ALBUM_PHOTOS_ERROR',

}

export default ACTION_TYPES;
