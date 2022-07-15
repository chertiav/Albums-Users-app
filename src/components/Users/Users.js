import React, { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from './UserForm';
import UsersList from './UsersList';
import UserAlbums from './UserAlbums';
import AlbumPhotos from '../Albums/AlbumPhotos';
import './UsersList.css';
import { fetchAllUsersAction } from '../../store/actions/usersActions';

function Users() {


	const {usersList: {users}} =useSelector(state => state)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAllUsersAction())
	}, [dispatch])

	const {url, path} = useRouteMatch();

	return (
		<>
			<nav className='header'>
				<NavLink to={`${url}/add`}>Add</NavLink>
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