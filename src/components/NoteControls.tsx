import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {Note} from '../types';

//Interface Props
interface Props {
	topId: number,
	newNote: (note: Note) => void
}



const NoteControls: React.FC<Props> = props => {
	//exclude variable from Props Object
	const { topId } = props;

	//References on Input elements
	const titleInput = useRef<HTMLInputElement>(null);
	const messageInput = useRef<HTMLTextAreaElement>(null);

	//Components - State
	const [generateId, setGenerateId] = useState(topId + 1);
	const [note, setNote] = useState({
		id: 4,
		title: '',
		date: Date(),
		message: '',
		deadLine: '',
		important: false,
		done: false,
	});

	//UseEffect HOOK for mounted equivalent;
	useEffect(() => {
		document.addEventListener('keypress', event => {				// EventListener - method will by triggered with keypress
			if(event.key === 'Enter') {									// check if pressed key is Enter
				submitHandle();											// calling submitHandle method
			}
		});
	}, /*[] - empty array will be run mounted hook only 1 times*/ );

	//Methods

	const formSubmit = (event: FormEvent<HTMLFormElement>) => {			//	Form Submit method called by Form submit
		event.preventDefault();											//	event.preventDefault stop page Refresh
		submitHandle();													//	calling method submitHandle
	};

	const setNewId = () => {
		setNote(prevNote => ({
			...prevNote, ['id']: generateId + 1
		}));

		setGenerateId(generateId + 1);
	};

	const submitHandle = () => {
		if(note.title && note.message) {

			props.newNote(note);
			setNewId();

			if(titleInput.current) {
				titleInput.current.value = '';
				titleInput.current.focus();
			}

			if(messageInput.current) {
				messageInput.current.value = '';

			}

		}
	};

	const onCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNote(prevNote => ({
			...prevNote, ['important']: event.target.checked
		}));
	};

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNote(prevNote => ({
			...prevNote, ['title']: event.target.value
		}));
	};

	const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNote(prevNote => ({
			...prevNote, ['message']: event.target.value
		}));
	};

	const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNote(prevNote => ({
			...prevNote, ['deadLine']: event.target.value
		}));
	};

	//Template
	return (
		<div className="notes-controls">
			<h1 className="section-title">Controls:</h1>
			<form onSubmit={formSubmit}>
				<input id="title" onChange={onInputChange} ref={titleInput} autoFocus required className="input-style" type="text" placeholder="Note Title"/>
				<textarea id="message" onChange={onTextChange} ref={messageInput} required className="input-style" placeholder="some text here..." rows={6}/>
				<label className="label-input" htmlFor="date">setDeadline:</label>
				<input id="date" onChange={onDateChange} required className="input-style" type="date" />
				<div className="check-boxes mb-4">
					<label className="inline-flex items-center">
						<input id="important" onChange={onCheckBoxChange} type="checkbox"/>
						<span className="ml-2 text-gray-100">Important</span>
					</label>
				</div>

				<button className="pink-button" type="submit">+ New Note</button>
			</form>
		</div>
	);
};

export default NoteControls;