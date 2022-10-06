import React from 'react';
import TextError from './TextError';
import { Field, ErrorMessage } from 'formik';
const Select = (props) => {
	const { label, name, options, ...rest } = props;
	// console.log(props)
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field id={name} name={name} {...rest} />
			<ErrorMessage component={TextError} name={name} />
		</div>
	)
}
export default Select;
