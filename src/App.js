import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/home.page'

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path='/' component={HomePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
