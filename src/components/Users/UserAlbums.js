import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { fetchAllUsersAlbumsAction } from '../../store/actions/albumsActions';


function UserAlbums() {

	const {albumsList: {albums}} = useSelector(state => state);
	const dispatch = useDispatch();
	const {id} = useParams();

	useEffect(() => {
		console.log(id);
		dispatch(fetchAllUsersAlbumsAction(id))
	}, [dispatch, id])

	return (
		<ul className="albums-container">
			{albums.map(({id, title}) =>
				<li className="album-item" key={id}>
					<NavLink to={`/albums/${id}`}>{title}</NavLink>
				</li>
			)}
		</ul>
	)
}

export default UserAlbums;