import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './components/User/Signup'
import Login from './components/User/Login'
import AfterSignup from './components/User/AfterSignup';
import ForgotPassword from './components/User/ForgotPassword';
import NewPassword from './components/User/NewPassword';
import Main from './components/Main';
import User from './components/User/User';
import CreatePost from './components/Post/CreatePost';
import SinglePost from './components/Post/SinglePost';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/aftersignup" component={AfterSignup}/>
        <Route exact path="/forgot" component={ForgotPassword}/>
        <Route exact path="/newPassword/:email" component={NewPassword}/>
        <Route exact path="/user" component={User} />
        <Route exact path="/create" component={CreatePost}/>
        <Route exact path="/single/post/:id" component={SinglePost}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
