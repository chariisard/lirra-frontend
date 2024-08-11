import {
 BrowserRouter as Router,
 Route,
 Routes,
 Navigate,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import RecoBookForm from "./pages/RecoBookForm";
import RecoEBookForm from "./pages/RecoEBookForm";
import RecoMultiMediaForm from "./pages/RecoMultiMediaForm";
import RecoMagazineForm from "./pages/RecoMagazineForm";
import SearchResult from "./pages/SearchResult";
import { useEffect, useState } from "react";
import { getLocalStorage } from "./utilities";

function App() {
 const [sessionUser, setSessionUser] = useState(null);

 useEffect(() => {
  function getUser() {
   const user = getLocalStorage("user");
   setSessionUser(user || null);
  }
  getUser();
  window.addEventListener("storage", getUser);
  return () => window.removeEventListener("storage", getUser);
 }, []);

 return (
  <div className="App">
   <Router>
    <Routes>
     {sessionUser ? (
      <>
       <Route path="/" element={<Navigate to="/home" />} />
       <Route path="/sign-in" element={<Navigate to="/home" />} />
       <Route path="/sign-up" element={<Navigate to="/home" />} />
       <Route path="/forgot-password" element={<ForgotPasswordPage />} />
       <Route path="*" element={<Navigate to="/home" />} />{" "}
      </>
     ) : (
      <>
       <Route path="/" element={<SignInPage />} />
       <Route path="/sign-up" element={<SignUpPage />} />
       <Route path="/forgot-password" element={<ForgotPasswordPage />} />
       <Route path="*" element={<Navigate to="/" />} />{" "}
      </>
     )}

     {sessionUser && (
      <>
       <Route path="/home" element={<Home />} />
       <Route path="/recommend" element={<Recommend />} />
       <Route path="/recommend-book" element={<RecoBookForm />} />
       <Route path="/recommend-ebook" element={<RecoEBookForm />} />
       <Route path="/recommend-multimedia" element={<RecoMultiMediaForm />} />
       <Route path="/recommend-magazine" element={<RecoMagazineForm />} />
       <Route path="/search" element={<SearchResult />} />
       <Route path="*" element={<Navigate to="/home" />} />{" "}
      </>
     )}
    </Routes>
   </Router>
  </div>
 );
}

export default App;
