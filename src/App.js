import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/signUp/Register";
import Dashboard from "./components/logout/Dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import Mainpage from "./components/logout/main";
import { auth } from "./components/firebase";
import landingPage from "./components/landingPage/landingPage";
function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          user ? <Mainpage /> : <Login />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
