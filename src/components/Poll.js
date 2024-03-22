import { connect } from 'react-redux';
import UnansweredPoll from './UnansweredPoll';
import AnsweredPoll from './AnsweredPoll';

const Poll = (props) => {
	const { id, authedUser, questions } = props;
	const poll = questions[id];

	if (!poll) {
		return null;
	}

	const answeredByUser =
		poll.optionOne.votes.includes(authedUser) ||
		poll.optionTwo.votes.includes(authedUser);

	return answeredByUser ? (
		<AnsweredPoll poll={poll} />
	) : (
		<UnansweredPoll poll={poll} />
	);
};

const mapStateToProps = ({ authedUser, questions }) => ({
	authedUser,
	questions,
});

export default connect(mapStateToProps)(Poll);
