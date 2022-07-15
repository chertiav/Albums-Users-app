import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { fetchAllAlbumsAction } from '../../store/actions/albumsActions';
import AlbumPhotos from './AlbumPhotos';
import AlbumsList from './AlbumsList';

function Albums() {

	const {albumsList: {albums}} =useSelector(state => state)
	const dispatch = useDispatch()
	const {path} = useRouteMatch();

	useEffect(() => {
		dispatch(fetchAllAlbumsAction())
	}, [dispatch])

	return (
		<Switch>
			<Route path={`${path}`} exact>
				<AlbumsList albums={albums} />
			</Route>
			<Route path={`${path}/:id`}>
				<AlbumPhotos />
			</Route>
		</Switch>
	)
}

export default Albums;