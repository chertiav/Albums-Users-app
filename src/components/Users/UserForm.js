import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

import {emptyUser} from '../../model/model';
import './UsersForm.css'

function UserForm({users}) {

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
		setTimeout(() => { actions.setSubmitting(false) }, 2000)
		!values.id
			? console.log('createUserAction', values)
			: console.log('updateUserAction', values);
		actions.resetForm();
		// goHome();
	}

	const renderForm = (
		props
		// {values, isSubmitting, errors}
		) => {
		console.log(props.errors);
		return (
			<Form id="users-form">
				<ErrorMessage name='name'/>
				{/* { props.errors.name && props.touched.name && <div>{props.errors.name}</div> } */}
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
						<ErrorMessage name='email'/>
						{/* { props.errors.email && props.touched.email && <div>{ props.errors.email}</div> } */}
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
						<ErrorMessage name='address.city'/>
						{/* { props.errors.address.city && props.touched.address.city && <div>{ props.errors.address.city}</div> } */}
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
							// className='save-btn'
							disabled={ props.isSubmitting}
							startIcon={<SaveIcon/>}
						>Save</Button>
						<Button
							// type='button'
							variant="contained"
							type='reset'
							// onClick={onReset}

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
			// validate={validateForm}
			// validateOnBlur={false}
		>
		{renderForm}
		</Formik>
	)
}

export default UserForm;