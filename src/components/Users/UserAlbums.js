import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import dataService from '../../API/data-service';

function UserAlbums() {


	const [albums, setAlbums] = useState([]);
	const {id} = useParams()

	useEffect(() => {
		dataService.get(`/albums?userId=${id}`)
			.then(({data}) => setAlbums(data))
			.catch((error) => console.log(error))
	}, [id])

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