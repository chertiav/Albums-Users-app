import { put } from 'redux-saga/effects';
import dataService from '../API/data-service';
import { createUserError, createUserRequest, createUserSuccess, deleteUserError, deleteUserRequest, deleteUserSuccess, fetchAllUsersError, fetchAllUsersRequest, fetchAllUsersSuccess, updateUserError, updateUserRequest, updateUserSuccess } from '../store/actions/usersActions';

export function* getAllUsers(){
		yield put(fetchAllUsersRequest());
	try {
		const users =  yield dataService.get('/users').then(({data}) => data);
		yield put(fetchAllUsersSuccess(users));
	} catch (error) {
		yield put(fetchAllUsersError(error))
	}
}

export function* deleteUser({payload}){
	yield put(deleteUserRequest());
	try {
		yield dataService.delete(`/${payload}`);
		yield put(deleteUserSuccess(payload));
	} catch (error) {
		yield put(deleteUserError(error))
	}
}
export function* createUser({payload}){
	yield put(createUserRequest());
	try {
		const newUser = yield dataService.post(`/`, payload).then(({data}) => data);
		yield put(createUserSuccess(newUser));
	} catch (error) {
		yield put(createUserError(error))
	}
}
export function* updateUser({payload}){
	yield put(updateUserRequest());
	try {
		yield dataService.put(`/${payload.id}`, payload);
		yield put(updateUserSuccess(payload));
	} catch (error) {
		yield put(updateUserError(error))
	}
}