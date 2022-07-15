import { put } from 'redux-saga/effects';
import dataService from '../API/data-service';
import { fetchAllPhotosError, fetchAllPhotosRequest, fetchAllPhotosSuccess } from '../store/actions/photosActions';

export function* getAllPhotos({payload}){
		yield put(fetchAllPhotosRequest());
	try {
		const photos =  yield dataService.get(`/photos?albumId=${payload}`).then(({data}) => data);
		yield put(fetchAllPhotosSuccess(photos));
	} catch (error) {
		yield put(fetchAllPhotosError(error))
	}
}