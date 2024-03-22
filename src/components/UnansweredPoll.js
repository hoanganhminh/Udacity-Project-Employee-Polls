import { connect } from 'react-redux';
import Author from './Author';
import formatDate from '../utils/formatDate';
import { handleAnswerQuestion } from '../actions/questions';
import { updateUsersAnswers } from '../actions/users';

const UnansweredPoll = (props) => {
  const { poll, users, authedUser, dispatch } = props;
  const { id, author, optionOne, optionTwo, timestamp } = poll;
  const avatar = users[author].avatarURL;
  const name = users[author].name;

  const date = formatDate(timestamp);

  const chooseOption = (e) => {
    const answer = e.target.value;
    const qid = id;

    dispatch(handleAnswerQuestion({ authedUser, qid, answer }));
    dispatch(updateUsersAnswers({ authedUser, qid, answer }));
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>
        <div className="radiobuttons" onChange={chooseOption}>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id={`optionOne_${id}`}
              name={`options_${id}`}
              value="optionOne"
            />
            <label className="form-check-label" htmlFor={`optionOne_${id}`}>
              {optionOne.text}
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id={`optionTwo_${id}`}
              name={`options_${id}`}
              value="optionTwo"
            />
            <label className="form-check-label" htmlFor={`optionTwo_${id}`}>
              {optionTwo.text}
            </label>
          </div>
        </div>
      </div>
      <Author name={name} date={date} avatar={avatar} />
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }, { poll }) => ({
  users,
  authedUser,
  poll,
});

export default connect(mapStateToProps)(UnansweredPoll);
