import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';
import UserContext from "../../context/UserContext";
import TrendingHashtag from "../TrendingHashtag/TrendingHashtag";
import { useParams } from "react-router-dom";
import dotenv from "dotenv";
//import Header from "../Header/Header";

export default function HashtagPage(){

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { name, email, token } = user;
    const {hashtag} = useParams();

    const [hashtagsposts, setHashtagsposts] = useState([]);
    

    dotenv.config();

    useEffect(() => {
       
        loadHashtagposts();

    }, []);

    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    };
    
    function loadHashtagposts(){
        const promise = axios.get(`http://localhost:4000/hashtag/${hashtag}`); ////falta o config depois da "," pois é autenticada
        //const promise = axios.get(`http://www.localhost:4000/trending/${hashtag}`,config);

        promise.then(resposta => {
            setHashtagsposts(resposta.data);
        });
    }

    //console.log(hashtagsposts);

    return(
        <>
            <HashtagContainer>
                <TitleHashtag>
                    <h1># {hashtag}</h1>
                </TitleHashtag>

                <PostAndTrendingzone>
                    <Posts>

                    </Posts>
                    <TrendingHashtag>

                    </TrendingHashtag>
                </PostAndTrendingzone>

            </HashtagContainer>
            
        </>
        
    )

}

const Posts = styled.div`

    width: 611px;
    height: 276px;
    left: 241px;
    top: 230px;

    background: #171717;
    border-radius: 16px;
    margin-right: 25px;
`

const PostAndTrendingzone = styled.div`
    width: auto;
    display: flex;
`

const HashtagContainer=styled.div`

    margin-left: 20%;
    margin-right: 20%;
    margin-top: 53px;

`

const TitleHashtag=styled.div`

    h1{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;

        /* identical to box height */

        color: #FFFFFF;
    }

`
