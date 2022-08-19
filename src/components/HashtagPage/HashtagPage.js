import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import TrendingHashtag from "../TrendingHashtag/TrendingHashtag";
import { useParams } from "react-router-dom";
import dotenv from "dotenv";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import UserContext from "../../context/UserContext";
import Header from "../layout/Header";

export default function HashtagPage() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { hashtag } = useParams();

  const [hashtagsposts, setHashtagsposts] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  dotenv.config();

  useEffect(() => {
    loadHashtagposts();
  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  function loadHashtagposts() {
    const promise = axios.get(`${API_URL}/hashtag/${hashtag}`, config);

    promise.then((resposta) => {
      setHashtagsposts(...[resposta.data]);
    });
  }

  console.log(hashtagsposts);

  const [isLiked, setIsLiked] = useState(true);

  function toggleLike() {
    setIsLiked = !isLiked;
  }

  console.log(hashtag);

  return (
    <>
      <Header></Header>
      <HashtagContainer>
        <TitleHashtag>
          <h1># {hashtag}</h1>
        </TitleHashtag>

        <PostAndTrendingzone>
          <PostsZone>
            {hashtagsposts.map(
              ({
                username,
                picture_url,
                description,
                hashtags,
                coalesce,
                url,
              }) => {
                console.log(username);

                return (
                  <Posts>
                    <Left>
                      <img key={picture_url} src={picture_url} />

                      {isLiked ? (
                        <NotLiked onClick={toggleLike} />
                      ) : (
                        <NotLiked onClick={toggleLike} />
                      )}

                      <h3 key={coalesce}>
                        {coalesce.split(",").length - 1} likes
                      </h3>
                    </Left>
                    <Right>
                      <h1>{username}</h1>
                      <h4>
                        {description} <h1>#{hashtags}</h1>
                      </h4>
                      <UrlBox></UrlBox>
                    </Right>
                  </Posts>
                );
              }
            )}
          </PostsZone>

          <TrendingHashtag></TrendingHashtag>
        </PostAndTrendingzone>
      </HashtagContainer>
    </>
  );
}
const UrlBox = styled.div`
  width: 503px;
  height: 155px;
  left: 328px;
  top: 571px;

  border: 1px solid #4d4d4d;
  border-radius: 11px;
  margin-top: 9px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 13px;
    text-align: center;

    color: #ffffff;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 19px;
  h4 {
    margin-top: 8px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #b7b7b7;
  }
`;

const PostsZone = styled.div`
  display: flex;
  flex-direction: column;
`;

const Posts = styled.div`
  display: flex;

  width: 611px;
  height: 276px;
  left: 241px;
  top: 230px;
  margin-bottom: 16px;
  padding: 16px;
  box-sizing: border-box;

  background: #171717;
  border-radius: 16px;
  margin-right: 25px;
  h1 {
    color: white;
  }
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;

const PostAndTrendingzone = styled.div`
  width: auto;
  display: flex;
`;

const HashtagContainer = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 73px;
`;

const TitleHashtag = styled.div`
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;

    /* identical to box height */

    color: #ffffff;
  }
`;
const Liked = styled(IoHeart)`
  margin-top: 19px;
  fill: #ac0000;
  font-size: 25px;
`;

const NotLiked = styled(IoHeartOutline)`
  margin-top: 19px;
  color: #fff;
  font-size: 25px;
`;
