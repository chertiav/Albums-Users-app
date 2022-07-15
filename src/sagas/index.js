import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../store/actions/actionsTypes";
import { getAllAlbums } from "./albumsSagas";
import { getAllPhotos } from "./photosSagas";
import { deleteUser, getAllUsers } from "./usersSagas";

function* rootSaga(){
	yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getAllUsers)
	yield takeLatest(ACTION_TYPES.DELETE_USER_ACTION, deleteUser)
	yield takeLatest(ACTION_TYPES.GET_ALBUMS_ACTION, getAllAlbums)
	yield takeLatest(ACTION_TYPES.GET_ALBUM_PHOTOS_ACTION, getAllPhotos)
}

export default rootSaga;
