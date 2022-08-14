import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/signInPage";
import SignUp from "./pages/signUpPage";
import TrendingHashtag from "./TrendingHashtag";
import ResetStyle from "../assets/resetStyle";

// import UserContext from "../context/UserContext";
import { AuthProvider } from "../context/AuthContext";

export default function App() {
  // const [user, setUser] = useState({});
  return (
    // <UserContext.Provider value={{ user, setUser }}>
    <AuthProvider>
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/hashtag/:hashtag" element={<TrendingHashtag/>} /> */}
          <Route path="/hashtag" element={<TrendingHashtag />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    // </UserContext.Provider>
  );
}
