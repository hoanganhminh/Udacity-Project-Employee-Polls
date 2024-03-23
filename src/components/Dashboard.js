import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Poll from './Poll';

const Dashboard = (props) => {
	const { authedUser, questionIds, questions } = props;

	let questionsArr = [];
	for (let i = 0; i < questionIds.length; i++) {
		questionsArr.push(questions[questionIds[i]]);
	}

	const answeredQuestions = questionsArr.filter((q) => q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser));

	const unansweredQuestions = questionsArr.filter((q) => !q.optionOne.votes.includes(authedUser) && !q.optionTwo.votes.includes(authedUser));

	const [questionsToDisplay, setQuestionsToDisplay] = useState(unansweredQuestions);
	const [active, setActive] = useState(true);

	const showAnswered = () => {
		setQuestionsToDisplay(answeredQuestions);
		setActive(false);
	};

	const showUnanswered = () => {
		setQuestionsToDisplay(unansweredQuestions);
		setActive(true);
	};

	return (
		<div>
			<h1 class="mb-4">Dashboard</h1>
			<nav class="nav mb-3">
				<a className={active ? 'nav-link active' : 'nav-link'} onClick={showUnanswered}>New Questions</a>
				<a className={active ? 'nav-link active' : 'nav-link'} onClick={showAnswered}>Done</a>
			</nav>
			<ul className="list-unstyled">
				{questionsToDisplay.length > 0 ? (
					questionsToDisplay.map((q) => (
						<li key={q.id} className="mb-3">
							<Link to={`/questions/${q.id}`} className="text-decoration-none">
								<Poll id={q.id} />
							</Link>
						</li>
					))
				) : (
					<div>No polls available</div>
				)}
			</ul>
		</div>
	);
};

const mapStateToProps = ({ questions, authedUser }) => ({
	questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
	authedUser,
	questions,
});

export default connect(mapStateToProps)(Dashboard);
