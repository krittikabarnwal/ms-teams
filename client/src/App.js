import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallPage from "./components/CallPage/CallPage";
import HomePage from "./components/HomePage/HomePage";
import NoMatch from "./components/NoMatch/NoMatch";
import MyCalendar from "./components/Calender/Calendar";
import Notepad from "./components/Notepad/NotepadList";
import UniversalChatRoom from "./components/UniversalChatRoom/UniversalChatRoom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/chatroom">
          <Header />
          <Sidebar />
          <UniversalChatRoom />
        </Route>
        <Route exact path="/mycalendar">
          <MyCalendar />
        </Route>
        <Route exact path="/notepad">
          <Header />
          <Sidebar />
          <Notepad />
        </Route>
        <Route exact path="/:id">
          <CallPage />
        </Route>
        <Route exact path="/">
          <Header />
          <Sidebar />
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
