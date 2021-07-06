import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallPage from "./components/CallPage/CallPage";
import HomePage from "./components/HomePage/HomePage";
import NoMatch from "./components/NoMatch/NoMatch";
import MyCalendar from "./components/Calender/Calendar";
import Notepad from "./components/Notepad/NotepadList";
import Stopwatch from "./components/Stopwatch/Stopwatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/mycalendar">
          <MyCalendar />
        </Route>
        <Route exact path="/notepad">
          <Notepad />
        </Route>
        <Route exact path="/stopwatch">
          <Stopwatch />
        </Route>
        <Route exact path="/:id">
          <CallPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
