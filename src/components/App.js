import {React,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../context/UserContext";
import TrendingHashtag from "../components/TrendingHashtag/TrendingHashtag"
import HashtagPage from "./HashtagPage/HashtagPage";

export default function App(){
    const [user, setUser] = useState({});
    return(
        <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            <Routes>
                
                <Route path="/hashtag/:hashtag" element={<HashtagPage/>} />
                <Route path="/hashtag" element={<TrendingHashtag/>} /> {/*essa rota nao existe! precisa importar o componente apenas*/}

            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}