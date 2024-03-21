import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import LoginForm from './components/LoginForm';
import NewPollForm from './components/NewPollForm';
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
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/leaderboard" component={LeaderboardPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/add" component={NewPollPage} />
          <Route path="/questions/:question_id" component={PollPage} />
          <Route path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
