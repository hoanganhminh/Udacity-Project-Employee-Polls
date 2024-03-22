import { connect } from 'react-redux';
import BoardEntry from './BoardEntry';

const Leaderboard = (props) => {
	const { users } = props;

	return (
		<div>
			<h1 className="mb-4">Leaderboard</h1>
			{users.map((user) => (
				<BoardEntry
					key={user.id}
					name={user.name}
					avatar={user.avatarURL}
					numQanswered={Object.keys(user.answers).length}
					numQasked={user.questions.length}
				/>
			))}
		</div>
	);
};

const mapStateToProps = ({ users }) => {
	const sortedUsers = Object.values(users).sort(
		(a, b) =>
			Object.keys(b.answers).length +
			b.questions.length -
			(Object.keys(a.answers).length + a.questions.length)
	);

	return {
		users: sortedUsers,
	};
};

export default connect(mapStateToProps)(Leaderboard);
