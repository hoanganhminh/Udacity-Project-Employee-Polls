import { handleInitialData } from './actions/shared'
import { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadingBar } from 'react-redux-loading-bar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import PollPage from './components/PollPage'
import NewPoll from './components/NewPoll'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import NotFound from './components/NotFound'

const App = (props) => {
	const { loading } = props

	useEffect(() => {
		props.dispatch(handleInitialData())
	}, [loading])

	return (
		<Fragment>
			<LoadingBar />
			<div className="app-container">
				<Navbar />
				<div className='container'>
					{loading === true ? (
						<Login />
					) : (
						<Routes>
							<Route path="*" element={<NotFound page="page" />} />
							<Route exact path="/" element={<Dashboard />} />
							<Route path="/questions/:question_id" element={<PollPage />} />
							<Route path="/add" element={<NewPoll />} />
							<Route path="/leaderboard" element={<Leaderboard />} />
						</Routes>
					)}
				</div>
			</div>
		</Fragment>
	)
}

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
})

export default connect(mapStateToProps)(App)
