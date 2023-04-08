import { Route } from 'react-router-dom';
import './App.css';
import LoginButton from './auth/LoginButton';
import LogoutButton from './auth/LogoutButton';
import Challenges from './Challenges';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <div className="App-body">
        <span>
          <LoginButton />
          <LogoutButton />
        </span>
        <Route path="/challenges" component={Challenges}></Route>
      </div>
    </div>
  );
}

export default App;
