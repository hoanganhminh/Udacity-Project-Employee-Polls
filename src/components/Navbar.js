import { connect } from 'react-redux'
import User from './User'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Home
				</Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent"	>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Dashboard
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/leaderboard">
								Leaderboard
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/add">
								New
							</Link>
						</li>
					</ul>
					{!props.loading && <User />}
				</div>
			</div>
		</nav>
	)
}

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
})

export default connect(mapStateToProps)(Navbar)
