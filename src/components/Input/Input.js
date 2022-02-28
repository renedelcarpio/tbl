import './Input.scss';

const Input = ({ placeholder, label, value, type }) => {
	return (
		<div className='input__container'>
			<label className='input__label'>{label}</label>
			<input className='input' placeholder={placeholder} type={type}>
				{value}
			</input>
		</div>
	);
};

export default Input;
