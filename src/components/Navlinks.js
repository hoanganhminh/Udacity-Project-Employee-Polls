import { Link } from 'react-router-dom'

const Navlinks = () => {
	return (
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
	)
}

export default Navlinks
