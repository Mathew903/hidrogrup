import { useRef, type FormEvent, useState, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { InputContact } from './InputContact';
import type { formData } from '../types';

const INITIAL_VALUE = { name: '', email: '', phone: '', message: '' };

export const FormContact = () => {
	const [data, setData] = useState<formData>(INITIAL_VALUE);
	const form = useRef<HTMLFormElement>();
	const serviceID = import.meta.env.PUBLIC_SERVICE_ID;
	const templateID = import.meta.env.PUBLIC_TEMPLATE_ID;
	const publicKey = import.meta.env.PUBLIC_KEY;

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const myPromise = emailjs.sendForm(serviceID, templateID, form.current, {publicKey});
		toast.promise(myPromise, {
			loading: 'Loading',
			success: 'success',
			error: (err) => {
				console.log(err)
				return `This just happened: ${err.text}`
			},
		});
		setData(INITIAL_VALUE);
	};

	return (
		<>
			<form
				id="form"
				ref={form}
				onSubmit={sendEmail}
				className="w-auto max-w-[600px]"
				autoComplete="off"
			>
				<div className="mb-2 min-w-[100px]">
					<InputContact
						name="name"
						placeholder="name"
						value={data.name}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-2 flex md:flex-row flex-col md:gap-y-0 gap-y-2 md:gap-x-2 min-w-[100px]">
					<InputContact
						name="email"
						placeholder="email"
						value={data.email}
						onChange={handleChange}
					/>
					<InputContact
						type="inputPhone"
						value={data.phone}
						onChange={(phone: string) => {
							setData({ ...data, phone });
						}}
					/>
				</div>
				<div className='min-w-[100px]'>
					<InputContact
						type="inputTextArea"
						value={data.message}
						onChange={handleChange}
					/>
				</div>

				<div className="w-full md:flex md:justify-end">
					<button
						type="submit"
						id="button"
						className="w-full lg:w-auto mt-2 block py-3 px-2 text-sm font-medium bg-[#4443E0] hover:bg-[#34348c] text-white border-none rounded-md"
					>
						SEND CONSULT
					</button>
				</div>
			</form>

			<Toaster position="top-center" reverseOrder={false} />
		</>
	);
};
