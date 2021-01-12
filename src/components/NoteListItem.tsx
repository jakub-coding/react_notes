import React from 'react';
import {Note} from '../types';
import Moment from 'react-moment';

//Interface Props
interface Props {
    note: Note
	deleteNote: (Note: Note) => void;
    doneNote: (Note: Note) =>void;
    returnNote: (Note: Note) => void;
}

const NoteListItem: React.FC<Props> = props => {
	const {note} = props;
	//State

	//Methods
	const onDeleteButton = () => {
		props.deleteNote(note);
	};

	const onDoneButton = () => {
		props.doneNote(note);
	};

	const onReturnButton = () => {
		props.returnNote(note);
	};

	//Template
	return (
		<li className="bg-gray-100 rounded mb-4 p-4 grid grid-cols-4 gap-8">
			<div className="flex flex-col justify-center items-start col-span-3">
				<h1 className={note.important ? 'note-title-important' : note.done ? 'note-title-done' : 'note-title'}>{note.title}</h1>
				<p className="py-2 text-sm">
					deadline: <Moment format="DD. MM. YYYY">{note.deadLine}</Moment>
				</p>
				<p className={note.done ? 'text-sm text-gray-500 line-through' : 'text-sm text-gray-900'}>{note.message}</p>
				<p onClick={onReturnButton} className={! note.done ? 'hidden' : 'text-xs underline mt-4 text-gray-400 cursor-pointer'}>✔ return</p>
			</div>

			<div className="note-ctrl flex justify-end items-center">

				<button onClick={onDoneButton}
					className={note.done ? 'hidden' : 'pink-button'}>done
				</button>

				<button onClick={onDeleteButton}>
					<svg className="w-6 h-6 ml-4 text-red-600" fill="none" stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
					</svg>
				</button>

			</div>
		</li>
	);
};

export default NoteListItem;