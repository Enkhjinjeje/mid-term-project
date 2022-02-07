import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/signUp/Register";
import Dashboard from "./components/logout/Dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./components/firebase";
import LandingPage from "./components/landingPage/landingPage";
import UserProfile from "./components/logout/userProfile"
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/userprofile/:userprofileId" component={UserProfile} />
          user ? <UserProfile /> : <Login />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
