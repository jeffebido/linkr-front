import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/signInPage";
import SignUp from "./pages/SignUp/signUpPage";

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
          {/* <Route path="/timeline" element={<Timeline />} />
          <Route path="/hashtag/:hashtag" element={<Trend />} />
          <Route path="/user/:id" element={<UserPage />} /> */}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
