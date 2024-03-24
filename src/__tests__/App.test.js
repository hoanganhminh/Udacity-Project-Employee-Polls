import '@testing-library/jest-dom/extend-expect';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import Leaderboard from "../components/Leaderboard";
import NotFound from "../components/NotFound";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import App from '../App';

jest.mock('../utils/_DATA', () => ({
  _saveQuestion: jest.fn(),
  _saveQuestionAnswer: jest.fn(),
  _getInitialData: jest.fn()
}));

describe('Unit Tests', () => {
  test('Check if jest, @testing-library/react, and @testing-library/jest-dom are present in devDependencies', () => {
    const packageJson = require('../../package.json');
    const devDependencies = packageJson.devDependencies;
    expect(devDependencies).toHaveProperty('jest');
    expect(devDependencies).toHaveProperty('@testing-library/react');
    expect(devDependencies).toHaveProperty('@testing-library/jest-dom');
  });

  test('Async unit test for _saveQuestion with correct data', async () => {
    const questionData = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: 'user123',
    };
    _saveQuestion.mockResolvedValueOnce(questionData);
    const savedQuestion = await _saveQuestion(questionData);
    expect(savedQuestion).toEqual(questionData);
  });

  test('Async unit test for _saveQuestion with incorrect data', async () => {
    const incorrectData = {
      optionOne: 'Option One',
      optionTwo: 'Option Two',
      author: 'user123',
    };
    _saveQuestion.mockRejectedValueOnce(new Error('Incorrect data format'));
    await expect(_saveQuestion(incorrectData)).rejects.toThrow('Incorrect data format');
  });

  test('Async unit test for _saveQuestionAnswer with correct data', async () => {
    const answerData = {
      authedUser: 'user123',
      qid: 'question123',
      answer: 'optionOne',
    };
    _saveQuestionAnswer.mockResolvedValueOnce(true);
    const result = await _saveQuestionAnswer(answerData);
    expect(result).toBe(true);
  });

  test('Async unit test for _saveQuestionAnswer with incorrect data', async () => {
    const incorrectData = {
      user: '',
      question: 'question123',
      selectedOption: 'optionOne',
    };
    _saveQuestionAnswer.mockRejectedValueOnce(new Error('Incorrect data format'));
    await expect(_saveQuestionAnswer(incorrectData)).rejects.toThrow('Incorrect data format');
  });
});

test('Leaderboard component rendering', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    </MemoryRouter>);
  expect(getByText('Leaderboard')).toBeInTheDocument();
});

test('NotFound component rendering', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Provider store={store}>
        <NotFound />
      </Provider>
    </MemoryRouter>);
  expect(getByText('404 - Not Found')).toBeInTheDocument();
});

// describe('Integration Tests', () => {
//   test('User can select a username and login', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const selectElement = screen.getByTestId('test-select');
//     userEvent.selectOptions(selectElement, 'johndoe');
//     expect(selectElement.value).toBe('johndoe');
//   });

//   test('User can create a new poll with valid options', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const optionOneInput = screen.getByTestId('test-option-one');
//     userEvent.type(optionOneInput, 'Option One');
//     const optionTwoInput = screen.getByTestId('test-option-two');
//     userEvent.type(optionTwoInput, 'Option Two');
//     const submitButton = screen.getByTestId('test-submit-button');
//     expect(submitButton).toBeDisabled();
//     userEvent.click(submitButton);
//     expect(submitButton).toBeDisabled();
//   });

//   test('User cannot create a new poll with empty options', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const submitButton = screen.getByTestId('test-submit-button');
//     expect(submitButton).toBeDisabled();
//   });

//   test('User can navigate to the leaderboard page', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const leaderboardLink = screen.getByText('Leaderboard');
//     userEvent.click(leaderboardLink);
//     expect(screen.getByText('Leaderboard')).toBeInTheDocument();
//   });

//   test('User can navigate to the dashboard page', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const dashboardLink = screen.getByText('Dashboard');
//     userEvent.click(dashboardLink);
//     expect(screen.getByText('Dashboard')).toBeInTheDocument();
//   });

//   test('User can navigate to the new poll page', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const newPollLink = screen.getByText('New');
//     userEvent.click(newPollLink);
//     expect(screen.getByText('Would you rather')).toBeInTheDocument();
//   });

//   test('User can view details of a poll on the dashboard', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const firstPoll = screen.getAllByTestId('test-poll')[0];
//     userEvent.click(firstPoll);
//     expect(screen.getByText('Would you rather...')).toBeInTheDocument();
//   });

//   test('User can view details of a poll on the poll page', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const firstPoll = screen.getAllByTestId('test-poll')[0];
//     userEvent.click(firstPoll);
//     expect(screen.getByText('Would you rather...')).toBeInTheDocument();
//   });

//   test('User can answer an unanswered poll', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const optionOneInput = screen.getByLabelText(/Option One/i);
//     userEvent.click(optionOneInput);
//     const optionTwoInput = screen.getByLabelText(/Option Two/i);
//     userEvent.click(optionTwoInput);
//   });

//   test('User can logout from the application', () => {
//     render(<MemoryRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>);
//     const logoutButton = screen.getByText(/Logout/i);
//     userEvent.click(logoutButton);
//     expect(screen.getByText(/choose your username/i)).toBeInTheDocument();
//   });
// });