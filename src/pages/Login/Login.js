import Input from '../../components/Input/Input';
import React from 'react';

const Login = () => {
	return (
		<form>
			<Input label={'email'} type={'email'} />
			<Input label={'password'} type={'password'} />
		</form>
	);
};

export default Login;
