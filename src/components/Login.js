import { connect } from 'react-redux'
import { handleLogin } from '../actions/shared'

const Login = (props) => {
	const { users, userIds } = props

	let usersArr = []
	for (let i = 0; i < userIds.length; i++) {
		usersArr.push(users[userIds[i]])
	}

	const login = (e) => { props.dispatch(handleLogin(e.target.value)) }

	return (
		<div>
			<h1>Login</h1>
			<select data-testid="test-select" name="login" onChange={(e) => login(e)} className="form-select">
				<option>choose your username</option>
				{usersArr.map((user) => (
					<option key={user.id} value={user.id}>
						{user.name}
					</option>
				))}
			</select>
		</div>
	)
}

const mapStateToProps = ({ users }) => {
	const userIds = Object.keys(users)

	return { users, userIds }
}

export default connect(mapStateToProps)(Login)
