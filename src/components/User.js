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
		<div>
			<img
				src={avatarURL}
				alt={`${name.toLowerCase()} avatar`}
				width="35"
				height="35"
				className="rounded-circle me-2"
			/>
			<button
				data-testid="test-logout"
				className="btn btn-outline-primary btn-sm"
				onClick={logout}
			>
				Logout
			</button>
			<div className="user-name">{name}</div>
		</div>
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
