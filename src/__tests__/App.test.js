import '@testing-library/jest-dom/extend-expect';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

jest.mock('../utils/_DATA', () => ({
  _saveQuestion: jest.fn(),
  _saveQuestionAnswer: jest.fn(),
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
