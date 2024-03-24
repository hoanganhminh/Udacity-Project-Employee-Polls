import * as React from "react";
import Navbar from "../components/Navbar";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("Navbar", () => {
  test("Links rendered correctly", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/home/i);
    const newPollLink = screen.getByText(/add/i);
    const leaderboardLink = screen.getByText(/leaderboard/i);

    expect(homeLink).toBeInTheDocument();
    expect(newPollLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
  });

  test('Navigation links in Navbar check', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    );

    fireEvent.click(getByText('Dashboard'));
    expect(screen.getByText('Dashboard')).toBeInTheDocument();

    fireEvent.click(getByText('Leaderboard'));
    expect(screen.getByText('Leaderboard')).toBeInTheDocument();

    fireEvent.click(getByText('Add'));
    expect(screen.getByText('Add')).toBeInTheDocument();
  });
});

describe("Navbar", () => {
  test("should match snapshot", async () => {
    const navbar = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    );

    expect(navbar).toMatchSnapshot();
  });
});
