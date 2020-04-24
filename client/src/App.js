import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';


import HomeView from './components/HomePage/HomeView';
import SignUp from './components/UserSignUp/SignUpView';
import SelectLang from './components/SelectLanguage/selectLangView';
// import MenuContainer from './components/LessonMenu/LessonMenuView';
import SpanishPresentation from './components/SpanishPresentation/spaPresView';
import NavajoPresentation from './components/NavajoPresentation/navajoPresView';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/UserSignUp" component={SignUp} />
        <Route exact path="/SelectLanguage" component={SelectLang} />
        {/* <Route exact path="/LessonMenu" component={LessonMenu} /> */}
        <Route exact path="/SpanishPresentation" component={SpanishPresentation} />
        <Route exact path="/NavajoPresentation" component={NavajoPresentation} />

      </Switch>
    </Router>
  );
}

export default App;
