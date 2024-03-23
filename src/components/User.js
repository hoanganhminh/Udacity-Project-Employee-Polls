import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleLogin } from '../actions/shared'

const User = (props) => {
	const navigate = useNavigate()

	const { avatarURL, name } = props

	const logout = () => {
		props.dispatch(handleLogin(null))
		navigate('/')
	}

	return (
		<ul class="navbar-nav ml-auto">
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{name}
					<img src={avatarURL} alt={`${name.toLowerCase()} avatar`} width="40" height="40" class="rounded-circle ml-2" />
				</a>
				<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" onClick={logout}>Logout</a>
				</div>
			</li>
		</ul>
	)
}

const mapStateToProps = ({ authedUser, users }) => {
	const user = users[authedUser]
	const { avatarURL, name } = user
	return {
		avatarURL,
		name,
	}
}

export default connect(mapStateToProps)(User)
