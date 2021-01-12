import React, {useEffect, useState} from 'react';

//Children
import NoteList from '../components/NoteList';
import NoteControls from '../components/NoteControls';
import {Note} from '../types';

//Interface Props

const HomePage: React.FC = () => {
	//State
	const [notes, setNotes] = useState([
		{
			id: 1,
			title: 'toto je můj TITEL',
			date: 'Sun Jan 10 2021 18:00:01 GMT+0100',
			message: 'Gummi bears candy canes chocolate bar gingerbread icing marzipan. Gummi bears cotton candy fruitcake sweet sesame snaps. Chocolate cake jelly cake jelly. Danish halvah jelly danish sweet roll wafer. Lollipop bear claw pudding lemon drops candy apple pie cookie jelly beans candy canes. ',
			deadLine: '2021-01-29',
			important: true,
			done: false,
		},
		{
			id: 2,
			title: 'toto je můj TITEL 2',
			date: 'Sun Jan 10 2021 18:00:01 GMT+0100',
			message: 'Gummi bears candy canes chocolate bar gingerbread icing marzipan. Gummi bears cotton candy fruitcake sweet sesame snaps. Chocolate cake jelly cake jelly. Danish halvah jelly danish sweet roll wafer. Lollipop bear claw pudding lemon drops candy apple pie cookie jelly beans candy canes. ',
			deadLine: '2021-01-29',
			important: false,
			done: false,
		},
		{
			id: 3,
			title: 'toto je můj TITEL 3',
			date: 'Sun Jan 10 2021 18:00:01 GMT+0100',
			message: 'Gummi bears candy canes chocolate bar gingerbread icing marzipan. Gummi bears cotton candy fruitcake sweet sesame snaps. Chocolate cake jelly cake jelly. Danish halvah jelly danish sweet roll wafer. Lollipop bear claw pudding lemon drops candy apple pie cookie jelly beans candy canes. ',
			deadLine: '2021-01-29',
			important: false,
			done: true,
		},
	]);


	const getNewNote = (note: Note) => {
		setNotes([
			...notes, note
		]);
	};

	const deleteNote = (Note: Note) => {
		console.log('note was deleted', Note);
		setNotes(prevNotes => ([
			...prevNotes.filter(noteItem => noteItem !== Note)
		]));
	};

	const doneNote = (Note: Note) => {
		const copyNotes = [...notes];
		copyNotes.map(item => {
			if (item === Note) {
				item.done = true;
			}
		});

		setNotes([...copyNotes]);
	};

	const returnNote = (Note: Note) => {
		const copyNotes = [...notes];
		copyNotes.map(item => {
			if (item === Note) {
				item.done = false;
			}
		});

		setNotes([...copyNotes]);
	};

	const getHighestId = () => {
		return Math.max(...notes.map(d => d.id));
	};

	//Template
	return (
		<div className="note-container grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div className="notes-board">
				<h1 className="section-title">My Notes !</h1>
				<NoteList
					returnNote={returnNote}
					doneNote={doneNote}
					deleteNote={deleteNote}
					notes={notes} />
			</div>

			<NoteControls newNote={getNewNote} topId={getHighestId()}/>
		</div>
	);
};

export default HomePage;