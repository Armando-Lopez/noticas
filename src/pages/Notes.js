import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

export default function Notes() {
	const [notes, setNotes] = useState([])

	useEffect(() => {
		getNotes()
	}, [])

	const getNotes = async () => {
		const res = await fetch('http://localhost:8000/notes')
		const notes = await res.json()
		setNotes(notes)
	}

	const deleteNote = async (id) => {
		const res = await fetch('http://localhost:8000/notes/' + id, {
			method: 'DELETE',
		})

		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
	}

	const breakpoints = {
		default: 3,
		1100: 2,
		700: 1,
	}

	return (
		<Container>
			<Masonry
				breakpointCols={breakpoints}
				className='masonry-grid'
				columnClassName='masonry-grid_column'
			>
				{notes.map((note) => (
					<div key={note.id}>
						<NoteCard note={note} deleteNote={deleteNote} />
					</div>
				))}
			</Masonry>
		</Container>
	)
}
