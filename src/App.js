import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'

const customTheme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: purple,
	},
	typography: {
		fontFamily: 'Nunito',
		fontWeightLight: 200,
	},
})

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/'>
							<Notes />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</ThemeProvider>
	)
}

export default App
