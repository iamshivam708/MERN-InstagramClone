import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './components/User/Signup'
import Login from './components/User/Login'
import AfterSignup from './components/User/AfterSignup';
import ForgotPassword from './components/User/ForgotPassword';
import NewPassword from './components/User/NewPassword';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/aftersignup" component={AfterSignup}/>
        <Route exact path="/forgot" component={ForgotPassword}/>
        <Route exact path="/newPassword/:email" component={NewPassword}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
