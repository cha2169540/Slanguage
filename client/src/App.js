import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useLocation, useHistory, useParams } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomePage/HomeView';
import SignUp from './components/UserSignUp/SignUpView';
import SelectLang from './components/SelectLanguage/selectLangView';
import ProgressPage from './components/Progress/progressView.js';
import MenuContainer from './components/LessonMenu/LessonMenuView';
import Presentation from './components/Presentation/index';
import QuizCard from './components/QuizCard';
import NavBar from './components/NavBar';
import UserProvider, { UserContext } from './utils/Context';
import CardGradient from './components/CardGradient'
import About from './components/About'
import DashboardCard from './components/Dashboard/dashboardCards';


function App() {
  const location = useLocation();
  const {lang} = useParams();
  const [ language, setLanguage ] = useState(lang)
  
  useEffect(() => {
    setLanguage(lang)
  }, [lang])


  const { user, currentLang } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    if (location.pathname !== "/" && user === undefined) {
      history.push("/")
    }
  }, [user])
            
console.log(useParams());
  return (
    <>
     
      <UserProvider>
        {(location.pathname !== "/" && location.pathname !== "/UserSignUp" && location.pathname !== "/SelectLanguage" ) ? <NavBar /> : ""}
        <div className="bigPicture">
         <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/UserSignUp" component={SignUp} />
          <Route exact path="/SelectLanguage" component={SelectLang} />
          <Route exact path="/Progress" component={ProgressPage} />
          <Route path="/LessonMenu/:type/:lang" component={MenuContainer} />
          <Route exact path="/:lang/presentation/:lesson" component={Presentation} />
          <Route exact path="/QuizCard/:lang/:lesson" component={QuizCard} />
          <Route exact path="/CardGradient" component={CardGradient} />
          <Route exact path="/About" component={About} />
          <Route exact path="/DashboardCards/:lang" component={DashboardCard} />
        </Switch>
        </div>
      </UserProvider>
    </ >
  );
}

export default App;
