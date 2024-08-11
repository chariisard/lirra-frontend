import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Home from './pages/Home';
import Recommend from './pages/Recommend';
import RecoBookForm from './pages/RecoBookForm';
import RecoEBookForm from './pages/RecoEBookForm';
import RecoMultiMediaForm from './pages/RecoMultiMediaForm';
import RecoMagazineForm from './pages/RecoMagazineForm';
import SearchResult from './pages/SearchResult';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <SignInPage />
          </Route>
          <Route path='/sign-up'>
            <SignUpPage />
          </Route>
          <Route path='/forgot-password'>
            <ForgotPasswordPage />
          </Route>
          <Route path='/navbar'>
            <Navbar />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/recommend'>
            <Recommend />
          </Route>
          <Route path='/recommend-book'>
            <RecoBookForm />
          </Route>
          <Route path='/recommend-ebook'>
            <RecoEBookForm />
          </Route>
          <Route path='/recommend-multimedia'>
            <RecoMultiMediaForm />
          </Route>
          <Route path='/recommend-magazine'>
            <RecoMagazineForm />
          </Route>
          <Route path='/search'>
            <SearchResult />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
