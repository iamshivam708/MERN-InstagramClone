import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './components/User/Signup'
import Login from './components/User/Login'
import AfterSignup from './components/User/AfterSignup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/aftersignup" component={AfterSignup}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
