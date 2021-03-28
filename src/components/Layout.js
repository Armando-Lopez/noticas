import { Drawer, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const drawerWith = 240

const useStyles = makeStyles({
	page: {
		background: '#f9f9f9',
		width: '100%',
	},
	drawer: {
		width: drawerWith,
	},
	drawerPaper: {
		width: drawerWith,
	},
	root: {
		display: 'flex',
	},
})

export default function Layout({ children }) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper }}
			>
				<div>
					<Typography variant='h5'>Noticas</Typography>
				</div>
			</Drawer>
			<div className={classes.page}>{children}</div>
		</div>
	)
}
