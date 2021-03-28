import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	makeStyles,
} from '@material-ui/core'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
	field: {
		display: 'block',
		marginBottom: 20,
		marginTop: 20,
	},
})

export default function Create() {
	const [title, setTitle] = useState('')
	const [details, setDetails] = useState('')
	const [category, setCategory] = useState('todos')
	const [titleError, setTitleError] = useState(false)
	const [detailsError, setDetailsError] = useState(false)
	const history = useHistory()

	const classes = useStyles()

	const handleSubmit = (e) => {
		e.preventDefault()

		setTitleError(false)
		setDetailsError(false)

		if (!title.trim()) setTitleError(true)
		if (!details.trim()) setDetailsError(true)
		if (titleError || detailsError) return

		fetch('http://localhost:8000/notes', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title, details, category }),
		}).then(() => history.push('/'))
	}

	return (
		<Container>
			<Typography
				color='textSecondary'
				component='h2'
				gutterBottom
				variant='h6'
			>
				Crear nota
			</Typography>

			<form autoComplete='off' noValidate onSubmit={handleSubmit}>
				<TextField
					className={classes.field}
					error={titleError}
					fullWidth
					label='Titulo'
					onChange={(e) => setTitle(e.target.value)}
					required
					variant='outlined'
				/>
				<TextField
					className={classes.field}
					error={detailsError}
					fullWidth
					label='Titulo'
					multiline
					onChange={(e) => setDetails(e.target.value)}
					required
					rows={4}
					variant='outlined'
				/>

				<FormControl className={classes.field}>
					<FormLabel>Categoría</FormLabel>
					<RadioGroup
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<FormControlLabel
							value='todos'
							control={<Radio />}
							label='Tareas'
						/>
						<FormControlLabel
							value='reminders'
							control={<Radio />}
							label='Recordatorios'
						/>
						<FormControlLabel
							value='work'
							control={<Radio />}
							label='Trabajo'
						/>
					</RadioGroup>
				</FormControl>

				<Button
					color='secondary'
					endIcon={<KeyboardArrowRight />}
					type='submit'
					variant='contained'
				>
					Guardar
				</Button>
			</form>
		</Container>
	)
}
