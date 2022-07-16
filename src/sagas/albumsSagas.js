import { put } from 'redux-saga/effects';
import dataService from '../API/data-service';
import { fetchAllAlbumsError, fetchAllAlbumsRequest, fetchAllAlbumsSuccess, fetchAllAUserslbumsRequest, fetchAllUsersAlbumsError, fetchAllUsersAlbumsSuccess } from '../store/actions/albumsActions';

export function* getAllAlbums(){
		yield put(fetchAllAlbumsRequest());
	try {
		const albums =  yield dataService.get('/albums').then(({data}) => data);
		yield put(fetchAllAlbumsSuccess(albums));
	} catch (error) {
		yield put(fetchAllAlbumsError(error))
	}
}

export function* getAllUsersAlbums({payload}){
	yield put(fetchAllAUserslbumsRequest());
try {
	const allUsersAlbums =  yield dataService.get(`/albums?userId=${payload}`).then(({data}) => data);
	yield put(fetchAllUsersAlbumsSuccess(allUsersAlbums));
} catch (error) {
	yield put(fetchAllUsersAlbumsError(error))
}
}

