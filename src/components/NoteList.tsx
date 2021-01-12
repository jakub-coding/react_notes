import React from 'react';
import NoteListItem from './NoteListItem';

import { Note } from '../types';

interface Props {
	notes: Note[]
	deleteNote: (Note: Note) => void;
	doneNote: (Note: Note) =>void;
	returnNote: (Note: Note) => void;

}

const NoteList: React.FC<Props> = props => {
	const {notes} = props;
	//State

	//Methods

	//Template
	return (
		<ul>
			{notes.map(note => (
				<NoteListItem
					doneNote={props.doneNote}
					returnNote={props.returnNote}
					deleteNote={props.deleteNote}
					note={note} key={note.id}
				/>
			))}
		</ul>
	);
};

export default NoteList;