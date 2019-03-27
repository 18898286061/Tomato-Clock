import * as React from 'react';
import { Router, Route } from "react-router-dom";
import history from './config/history'
import Index from './components/Index/Index'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

class App extends React.Component {
  render(){
    return(
      <Router history={history}>
        <div>
          <Route exact={true} path="/" component={Index}/>
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp}/>
        </div>
      </Router>
    )
  }
}

export default App;
