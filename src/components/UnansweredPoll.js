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
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">Would you rather...</h5>
            <div class="radiobuttons" onChange={chooseOption}>
              <div class="form-check">
                <input type="radio" className="form-check-input" id={`optionOne_${id}`} name={`options_${id}`} value="optionOne" />
                <label className="form-check-label" htmlFor={`optionOne_${id}`}>
                  {optionOne.text}
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id={`optionTwo_${id}`} name={`options_${id}`} value="optionTwo" />
                <label className="form-check-label" htmlFor={`optionTwo_${id}`}>
                  {optionTwo.text}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2 align-self-center">
          <Author name={name} date={date} avatar={avatar} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }, { poll }) => ({
  users,
  authedUser,
  poll,
});

export default connect(mapStateToProps)(UnansweredPoll);
