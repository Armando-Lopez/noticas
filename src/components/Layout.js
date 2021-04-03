import React from 'react'
import {
	AppBar,
  Avatar,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'

const drawerWith = 240

const useStyles = makeStyles((theme) => {
	return {
		active: {
			backgroundColor: '#f0f0f0',
		},
		appbar: {
			width: `calc(100% - ${drawerWith}px)`,
		},
    appbarText: {
      flexGrow: 1
    },
		drawer: {
			width: drawerWith,
		},
		drawerPaper: {
			width: drawerWith,
		},
		page: {
			background: '#f9f9f9',
			width: '100%',
			padding: theme.spacing(3),
		},
		root: {
			display: 'flex',
		},
		title: {
			padding: theme.spacing(2),
		},
		toolbar: theme.mixins.toolbar,
	}
})

export default function Layout({ children }) {
	const classes = useStyles()
	const history = useHistory()
	const location = useLocation()

	const listItems = [
		{
			text: 'Mis notas',
			icon: <SubjectOutlined color='secondary' />,
			path: '/',
		},
		{
			text: 'Create note',
			icon: <AddCircleOutlined color='secondary' />,
			path: '/create',
		},
	]
	return (
		<div className={classes.root}>
			<AppBar className={classes.appbar}>
				<Toolbar>
					<Typography className={classes.appbarText}>Noticas</Typography>
          <Avatar>D</Avatar>
				</Toolbar>
			</AppBar>

			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper }}
			>
				<div>
					<Typography className={classes.title} variant='h5'>
						Noticas
					</Typography>
				</div>

				<List>
					{listItems.map(({ text, icon, path }) => (
						<ListItem
							className={location.pathname === path ? classes.active : ''}
							button
							key={text}
							onClick={() => history.push(path)}
						>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	)
}
