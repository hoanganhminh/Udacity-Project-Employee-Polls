import { connect } from 'react-redux';
import formatDate from '../utils/formatDate';
import Author from './Author';

const AnsweredPoll = (props) => {
  const { poll, users, authedUser } = props;
  const { author, optionOne, optionTwo, timestamp } = poll;
  const avatar = users[author].avatarURL;
  const name = users[author].name;

  const date = formatDate(timestamp);

  const optionOneNum = optionOne.votes.length;
  const optionTwoNum = optionTwo.votes.length;
  const optionsSum = optionOneNum + optionTwoNum;
  const userChoseOptionOne = optionOne.votes.includes(authedUser);
  const userChoseOptionTwo = optionTwo.votes.includes(authedUser);

  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-10">
          <div className="card-body">
            <h5 className="card-title">Would you rather...</h5>
            <p className="card-text">
              <span>{optionOne.text}</span> or{' '}
              <span>{optionTwo.text}?</span>
            </p>
            <p className="card-text">
              My answer:{' '}
              {
                userChoseOptionOne
                  ? optionOne.text : userChoseOptionTwo
                    ? optionTwo.text : 'None'
              }
            </p>
            <p className="card-text">
              Votes: {optionsSum} ({optionOneNum} for {optionOne.text} -{' '}
              {Math.round((optionOneNum / optionsSum) * 100)}%, {optionTwoNum} for {optionTwo.text} - {Math.round((optionTwoNum / optionsSum) * 100)}%)
            </p>
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

export default connect(mapStateToProps)(AnsweredPoll);

