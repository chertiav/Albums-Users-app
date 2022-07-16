import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../store/actions/actionsTypes";
import { getAllAlbums, getAllUsersAlbums } from "./albumsSagas";
import { getAllPhotos } from "./photosSagas";
import { createUser, deleteUser, getAllUsers, updateUser } from "./usersSagas";

function* rootSaga(){
	yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getAllUsers)
	yield takeLatest(ACTION_TYPES.DELETE_USER_ACTION, deleteUser)
	yield takeLatest(ACTION_TYPES.POST_USER_ACTION, createUser)
	yield takeLatest(ACTION_TYPES.PUT_USER_ACTION, updateUser)
	yield takeLatest(ACTION_TYPES.GET_ALBUMS_ACTION, getAllAlbums)
	yield takeLatest(ACTION_TYPES.GET_ALL_USERS_ALBUMS_ACTION, getAllUsersAlbums)
	yield takeLatest(ACTION_TYPES.GET_ALBUM_PHOTOS_ACTION, getAllPhotos)
}

export default rootSaga;
