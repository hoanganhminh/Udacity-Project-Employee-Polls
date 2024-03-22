import { connect } from 'react-redux'
import Navlinks from './Navlinks'
import User from './User'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Home
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent"	>
					<Navlinks />
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
