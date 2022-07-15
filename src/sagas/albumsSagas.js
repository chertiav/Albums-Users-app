import { put } from 'redux-saga/effects';
import dataService from '../API/data-service';
import { fetchAllAlbumsError, fetchAllAlbumsRequest, fetchAllAlbumsSuccess } from '../store/actions/albumsActions';

export function* getAllAlbums(){
		yield put(fetchAllAlbumsRequest());
	try {
		const albums =  yield dataService.get('/albums').then(({data}) => data);
		yield put(fetchAllAlbumsSuccess(albums));
	} catch (error) {
		yield put(fetchAllAlbumsError(error))
	}
}