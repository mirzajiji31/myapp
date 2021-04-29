import { Route, Switch } from 'react-router';

import Profile from './pages/profile';
import AuthPage from './pages/auth';

import Navigation from './components/navigation';
import Theme from './components/theme';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <hr />
      <Theme>
        <Switch>
          <Route path="/profile">
            <Profile title="Auth Protected profile page" />
          </Route>

          <Route path="/auth">
            <AuthPage />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
