import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import UserForm from './UserForm';
import UsersList from './UsersList';
import UserAlbums from './UserAlbums';
import AlbumPhotos from '../Albums/AlbumPhotos';
import './UsersList.css';
import dataService from '../../API/data-service';

function Users() {

	const [users, setUsers] = useState([]);


	useEffect(() => {
		dataService.get('/users')
			.then(({data}) => setUsers(data))
			.catch((error) => console.log(error))
	}, [])

	const {url, path} = useRouteMatch();

	return (
		<>
			<nav>
				<NavLink to={`${url}/add`} style={{fontSize:'20px', margin:'auto'}}>Add</NavLink>
			</nav>
			<Switch>
				<Route path={`${path}`} exact>
					<UsersList users={users} />
				</Route>
				<Route path={`${path}/add/:id`}>
					<UserForm users={users} />
				</Route>
				<Route path={`${path}/add/`}>
					<Redirect to={`${path}/add/:id`}>
						<UserForm />
					</Redirect>
				</Route>
				<Route path={`${path}/:id`}>
					<UserAlbums />
				</Route>
				<Route path={`${path}/album/:id`}>
					<AlbumPhotos />
				</Route>
			</Switch>

		</>

	)
}

export default Users;