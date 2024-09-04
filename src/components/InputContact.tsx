import {theme} from '../theme';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export const InputContact = ({ type = 'input', ...props }) => {
	return (
		<>
			{type === 'input' && (
				<input
					type="text"
					className={theme.inputStyleDefault}
					required
					{...props}	
				/>
			)}
			{type === 'inputPhone' && (
				<PhoneInput
					country='ar'
					regions={['south-america', 'north-america']}
					inputProps={{ name: 'phone', required: true }}
					placeholder="phone"
					inputClass={theme.inputStyleDefault}
					inputStyle={{ width: '100%', borderRadius: '6px', height: '100%' }}
					{...props}
				/>
			)}
			{type === 'inputTextArea' && (
				<textarea
					cols={10}
					rows={5}
					className={`${theme.inputStyleDefault} ${theme.textareaStyleDefault}`}
					placeholder="Message"
					name="message"
					required
					{...props}
				></textarea>
			)}
		</>
	);
};
