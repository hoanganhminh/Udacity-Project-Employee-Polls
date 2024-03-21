import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import PollPage from './pages/PollPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';
import NewPollPage from './pages/NewPollPage';
import NotFound from './components/NotFound';

function App() {
  const authedUser = useSelector(state => state.authedUser);

  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={authedUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/leaderboard" element={authedUser ? <LeaderboardPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={authedUser ? <NewPollPage /> : <Navigate to="/login" />} />
        <Route path="/questions/:question_id" element={<PollPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
