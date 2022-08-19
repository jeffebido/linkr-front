// import React from "react";
// import styled from 'styled-components';
// import axios from 'axios';
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useEffect, useContext, useState } from 'react';
// import TrendingHashtag from "../TrendingHashtag/TrendingHashtag";
// import { useParams } from "react-router-dom";
// import dotenv from "dotenv";
// import { IoHeart, IoHeartOutline } from "react-icons/io5";
// import UserContext from "../../context/UserContext";
// import Header from "../layout/Header";

// export default function Like(props){

//     const [isLiked, setIsLiked] = useState(true);

//     function toggleLike(){

//         setIsLiked=(!isLiked);

//     }


//     {isLiked? <NotLiked onClick={toggleLike}/> : <NotLiked onClick={toggleLike} />}

//     <h3 key={coalesce} >{props.post.coalesce.split(',').length-1} likes</h3>

// }

// const Liked = styled(IoHeart)`

//     margin-top: 19px;
//     fill: #AC0000;
//     font-size: 25px;
// `;

// const NotLiked = styled(IoHeartOutline)`
//     margin-top: 19px;
//     color: #FFF;
//     font-size: 25px;
// `;