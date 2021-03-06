import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './components/Index/Index';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Index}/>
        <Route path='/login' component={Login}/>
        <Route path='/signUp' component={SignUp}/>
      </Router>
    );
  }
}

export default App;