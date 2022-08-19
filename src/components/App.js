import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/signInPage";
import SignUp from "./pages/SignUp/signUpPage";
import TrendingHashtag from "../components/TrendingHashtag/TrendingHashtag";
import HashtagPage from "./HashtagPage/HashtagPage";
import Timeline from "./pages/timeline/Timeline";
import UserContext from "../context/UserContext";

export default function App() {
  const [username, setUsername] = useState(null);
  const [image, setImage] = useState(null);
  const [token, setToken] = useState(null);
  const [updateListPosts, setUpdateListPosts] = useState(0);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          username,
          setUsername,
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
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
          <Route path="/hashtag" element={<TrendingHashtag />} />{" "}
          {/*essa rota nao existe! precisa importar o componente apenas- doing that*/}
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
