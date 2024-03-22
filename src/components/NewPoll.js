import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleSaveQuestion } from '../actions/questions';

const NewPoll = (props) => {
	const { authedUser, dispatch } = props;
	const navigate = useNavigate();

	const initialQuestionObject = {
		author: authedUser,
		optionOneText: '',
		optionTwoText: '',
	};

	const [question, setQuestion] = useState(initialQuestionObject);
	const [disabled, setDisabled] = useState(true);

	const checkInput = () => {
		if (question.optionOneText !== '' && question.optionTwoText !== '') {
			setDisabled(false);
		}
	};

	useEffect(() => {
		checkInput();
	}, [question]);

	const handlePollSubmit = (e) => {
		e.preventDefault();

		dispatch(handleSaveQuestion(question)).then(() => {
			setQuestion(initialQuestionObject);
			setDisabled(true);
			navigate('/');
		});
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setQuestion({ ...question, [name]: value });
	};

	return (
		<div>
			<h1>Would you rather</h1>
			<form onSubmit={handlePollSubmit} className="poll-form">
				<label htmlFor="optionOneText">First Option</label>
				<input
					data-testid="test-option-one"
					name="optionOneText"
					value={question.optionOneText}
					onChange={handleInputChange}
					className="form-control mb-2"
					type="text"
					size="50"
				/>
				<label htmlFor="optionTwoText">Second Option</label>
				<input
					data-testid="test-option-two"
					name="optionTwoText"
					value={question.optionTwoText}
					onChange={handleInputChange}
					className="form-control mb-2"
					type="text"
					size="50"
				/>
				<button data-testid="test-submit-button" disabled={disabled} className="btn btn-primary mt-3">
					Submit
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = ({ authedUser }) => {
	return { authedUser };
};

export default connect(mapStateToProps)(NewPoll);
