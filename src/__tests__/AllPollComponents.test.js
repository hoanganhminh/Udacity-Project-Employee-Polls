import * as React from "react";
import NewPoll from "../components/NewPoll";
import AnsweredPoll from "../components/AnsweredPoll";
import UnansweredPoll from "../components/UnansweredPoll";
import PollPage from "../components/PollPage";
import Poll from "../components/Poll";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("NewPoll", () => {
  test('NewPoll component rendering', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );
    expect(getByText('Would you rather')).toBeInTheDocument();
  });

  test("Enable submit button when both inputs have values", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );
    const firstInput = screen.getByTestId("test-option-one");
    const secondInput = screen.getByTestId("test-option-two");
    const submitButton = screen.getByTestId("test-submit-button");
    expect(submitButton).toHaveAttribute("disabled");
    fireEvent.change(firstInput, { target: { value: "first value" } });
    fireEvent.change(secondInput, { target: { value: "second value" } });
    expect(submitButton).not.toHaveAttribute("disabled");
  });
});

// test('Poll component rendering with valid props', () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <Provider store={store}>
//         <Poll id="8xf0y6ziyjabvozdd253nd" />
//       </Provider>
//     </MemoryRouter>
//   );
//   expect(getByText('Would you rather...')).toBeInTheDocument();
// });

// test('AnsweredPoll and UnansweredPoll component rendering', () => {
//   const { getByText } = render(<MemoryRouter>
//     <Provider store={store}>
//       <AnsweredPoll />
//     </Provider>
//   </MemoryRouter>);
//   expect(getByText('Would you rather...')).toBeInTheDocument();

//   const { getByLabelText } = render(<UnansweredPoll />);
//   expect(getByLabelText('First Option')).toBeInTheDocument();
//   expect(getByLabelText('Second Option')).toBeInTheDocument();
// });

// test('PollPage component rendering with valid ID', () => {
//   const { getByText } = render(
//     <MemoryRouter>a
//       <Provider store={store}>
//         <PollPage />
//       </Provider>
//     </MemoryRouter>);
//   expect(getByText('Would you rather...')).toBeInTheDocument();
// });

// test('PollPage component rendering with invalid ID', () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <Provider store={store}>
//         <PollPage question_id="8xf0y 6ziyja bvozdd sfdsfsd fsdf25 3nd" />
//       </Provider>
//     </MemoryRouter>);
//   expect(getByText('404 - Not Found')).toBeInTheDocument();
// });

