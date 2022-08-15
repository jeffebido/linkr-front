import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/signInPage";
import SignUp from "./pages/SignUp/signUpPage";
import TrendingHashtag from "../components/TrendingHashtag/TrendingHashtag"
import HashtagPage from "./HashtagPage/HashtagPage";

import UserContext from "../context/UserContext";

export default function App() {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [token, setToken] = useState(null);
  const [updateListPosts, setUpdateListPosts] = useState(0);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          user,
          setUser,
          image,
          setImage,
          token,
          setToken,
          setUpdateListPosts,
          updateListPosts,
        }}
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage/>} />
          <Route path="/hashtag" element={<TrendingHashtag/>} /> {/*essa rota nao existe! precisa importar o componente apenas- doing that*/}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
