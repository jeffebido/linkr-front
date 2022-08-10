import {React,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../context/UserContext";
import TrendingHashtag from "../components/TrendingHashtag/TrendingHashtag"

export default function App(){
    const [user, setUser] = useState({});
    return(
        <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            <Routes>
                
                {/* <Route path="/hashtag/:hashtag" element={<TrendingHashtag/>} />      */}
                <Route path="/hashtag" element={<TrendingHashtag/>} />     
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}