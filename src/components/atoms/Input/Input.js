import React from 'react';

const Input = ({id, className, onChange, type, ...others }) => {
	return (
		<label
		  htmlFor={id}
		  className={className}
		>
		<input
		  id={id}
		  type={type}
		  onChange={event => onChange(event)}
		  {...others}
		/>
		</label>
	);
}

Input.displayName = 'Input';

export default Input;