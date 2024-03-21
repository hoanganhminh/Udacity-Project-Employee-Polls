import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
import PollPage from './pages/PollPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';
import NewPollPage from './pages/NewPollPage';
import NotFound from './components/NotFound';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={<NewPollPage />} />
        <Route path="/questions/:question_id" element={<PollPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
