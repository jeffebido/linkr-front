import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';
import UserContext from "../../context/UserContext";

export default function TrendingHashtag(){

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { name, email, token } = user;

    let hashtags = [
        {hashtag: "javascript"},
        {hashtag: "react"},
        {hashtag:"dom"},
        {hashtag:"css"},
        {hashtag:"mongo"},
        {hashtag:"sql"},
        {hashtag:"posgres"},
        {hashtag:"html"},
        {hashtag:"arrays"},
        {hashtag:"strings"}
    ]
    // console.log(hashtags.length)
    // console.log(hashtags)
    return(
        <>
            <TrendHashtag>
                <h1>
                    trending
                </h1>
                <Line>
                </Line>
                <HashtagsBox>
                    {/* <h2 onClick={()=>navigate(`/hashtag/${hashtag}`)}>  #{hashtag} </h2> */}
                    {hashtags.map( ({hashtag}) => {
                        
                        return <h2 key={hashtag} onClick={()=>navigate(`/hashtag/${hashtag}`)}> # {hashtag} </h2>
                        
                    })}
                </HashtagsBox>
            </TrendHashtag>
        </>
    )
}
const TrendHashtag=styled.div`

    width: 301px;
    height: 406px;
    background: #171717;
    border-radius: 16px;
    /* padding-left: 16px;
    padding-top: 12px; */
    box-sizing: border-box;
    h1{
        padding-top: 9px;
        margin-left: 16px;
        font-family: 'oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color:#ffffff;
        letter-spacing: 0.05em;
    }
    
`
const Line = styled.div`
    margin-top: 9px;
    width: 300px;
    height: 0px;
    z-index: 2;
    border: 1px solid #484848;
`
const HashtagsBox = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
            margin-left: 16px;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 19px;
            line-height: 23px;
            letter-spacing: 0.05em;
            color: #FFFFFF;
            margin-top: 4px;
    }
`