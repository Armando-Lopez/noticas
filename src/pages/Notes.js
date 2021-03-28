import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'

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

	return (
		<Container>
			<Grid container spacing={3}>
				{notes.map((note) => (
					<Grid item xs={12} sm={6} md={3} key={note.id}>
						<NoteCard note={note} deleteNote={deleteNote} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
