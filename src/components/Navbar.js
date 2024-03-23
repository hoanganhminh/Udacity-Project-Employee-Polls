import { connect } from 'react-redux'
import Navlinks from './Navlinks'
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
