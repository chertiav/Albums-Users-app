import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

import {emptyUser} from '../../model/model';
import './UsersForm.css'
import { createUserAction, updateUserAction } from '../../store/actions/usersActions';

function UserForm({users}) {

	const dispatch = useDispatch()
	const {id} = useParams();
	const currentUser = users.find((user) => user.id === parseInt(id));
	const history = useHistory();
	const goHome = () => history.push('/users');

	const schemaForm = Yup.object().shape({
		name: Yup.string()
			.required('Field name is required')
			.min(2, 'Too  less letter')
			.max(10, 'Too many letter '),
		email: Yup.string()
			.email('No valide email')
			.matches(/^\w+\.?\w+@[a-z]{3,8}(\.[a-z]{2,5})$/iu, 'No match')
			.required('Field name is required'),
		address: Yup.object().shape({
			city: Yup.string()
				.required('Field city is required')
				.min(2, 'Too  less letter')
				.max(10, 'Too many letter '),
		})
	})

	const onFormikSubmit = (values, actions) => {
		// setTimeout(() => { actions.setSubmitting(false) }, 2000)
		console.log(values);
		!values.id
			? dispatch(createUserAction({...values, id: Date.now()}))
			: dispatch(updateUserAction(values));
		// actions.resetForm();
		goHome();
	}

	const renderForm = (props) => {
		return (
			<Form id="users-form">
				{ErrorMessage
					? <div className="error"><ErrorMessage name='name'/></div>
					: null}
				<div className="field-container">
					<label htmlFor='name'>Name</label>
					<Field name='name' placeholder='Name'/>
				</div>
				<fieldset id='contact' form='users-form' className='group-container'>
					<legend>Contact</legend>
						<div className="field-container">
							<label htmlFor='email'>Email</label>
							<Field name='email' placeholder='Email'/>
						</div>
						{ErrorMessage
							? <div className="error"><ErrorMessage name='email'/></div>
							: null}
						<div className="field-container">
							<label htmlFor='phone'>Phone</label>
							<Field name='phone' placeholder='Phone'/>
						</div>
				</fieldset>
				<fieldset id='address' form='users-form' className='group-container'>
					<legend>Address</legend>
						<div className="field-container">
							<label htmlFor='city'>City</label>
							<Field name='address.city' placeholder='City'/>
						</div>
						{ErrorMessage
							? <div className="error"><ErrorMessage name='address.city'/></div>
							: null}
						<div className="field-container">
							<label htmlFor='street'>Street</label>
							<Field name='address.street' placeholder='Street'/>
						</div>
						<div className="field-container">
							<label htmlFor='zipcode'>Zipcode</label>
							<Field name='address.zipcode' placeholder='Zipcode'/>
						</div>
				</fieldset>
				<div className="btn-group">
					<Stack
						direction='row'
						spacing = {8}
					>
						<Button
							variant="contained"
							size='large'
							color = 'success'
							type='submit'
							style={{backgroundColor:'teal'}}
							disabled={ props.isSubmitting}
							startIcon={<SaveIcon/>}
						>Save</Button>
						<Button
							variant="contained"
							type='reset'
						>Reset</Button>
						<Button
							type='button'
							variant="contained"
							onClick={goHome}
						>Return</Button>
					</Stack>
				</div>
			</Form>
		)
	}

	return (
		<Formik
			initialValues={currentUser ? currentUser : emptyUser}
			onSubmit={onFormikSubmit}
			validationSchema={schemaForm}
		>
		{renderForm}
		</Formik>
	)
}

export default UserForm;