import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { IconButton, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'

export default function NoteCard({ note, deleteNote }) {
	return (
		<Card elevation={1}>
			<CardHeader
				action={
					<IconButton onClick={() => deleteNote(note.id)}>
						<DeleteOutlined />
					</IconButton>
				}
				title={note.title}
				subheader={note.category}
			/>
			<CardContent>
				<Typography variant='body2' color='textSecondary'>
					{note.details}
				</Typography>
			</CardContent>
		</Card>
	)
}
