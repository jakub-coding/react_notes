import React, {ChangeEvent, FormEvent, useState} from 'react';

const Contact: React.FC = () => {
	//State
	const [formData, setFormData] = useState({
		name: '',
		mail: '',
		message: '',
	});

	const onSubmitHandle = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
		alert('data successfully send, watch console :-)');
	};

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const formDataHandle = {
			name: formData.name,
			mail: formData.mail,
			message: formData.message,
		};

		if (event.target.id === 'name') {
			formDataHandle.name = event.target.value;
			setFormData(formDataHandle);
		}
		if (event.target.id === 'mail') {
			formDataHandle.mail = event.target.value;
			setFormData(formDataHandle);
		}

	};

	const onTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const formDataHandle = {
			name: formData.name,
			mail: formData.mail,
			message: formData.message,
		};

		formDataHandle.message = event.target.value;

		setFormData(formDataHandle);
	};

	//Template
	return (
		<div className="section">
			<h1 className="text-6xl text-gray-100 text-center">Contact</h1>
			<form onSubmit={onSubmitHandle}>

				<label className="inline-block mb-2 text-gray-100 text-xl" htmlFor="name">Your Name:</label>
				<input className="w-full mb-4 p-2 rounded" id="name" type="text" onChange={onInputChange}/>

				<label className="inline-block mb-2 text-gray-100 text-xl" htmlFor="mail">Your E-mail:</label>
				<input className="w-full mb-4 p-2 rounded" id="mail" type="mail" onChange={onInputChange}/>

				<label className="inline-block mb-2 text-gray-100 text-xl" htmlFor="message">Your Message:</label>
				<textarea className="w-full mb-4 p-2 rounded" id="message" rows={6} onChange={onTextAreaChange}/>

				<button className="py-4 px-8 text-gray-100 font-bold rounded bg-pink-700" type="submit">Send Message</button>

			</form>
		</div>
	);
};

export default Contact;