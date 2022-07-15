import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllPhotosAction } from '../../store/actions/photosActions';

function AlbumPhotos() {

	const {photosList: {photos}} =useSelector(state => state)
	const dispatch = useDispatch()
	const {id} = useParams();

	useEffect(() => {
		dispatch(fetchAllPhotosAction(id))
	}, [dispatch, id])

	return (
		<>
			<div className='albums-photos'>
				{photos.map(({title, id, thumbnailUrl}) => (
					<p key= {id}  className="photos-item">
						{title}
						<img src={thumbnailUrl} alt={title} width='150px'></img>
					</p>
				))}
			</div>
		</>

	)
}

export default AlbumPhotos;