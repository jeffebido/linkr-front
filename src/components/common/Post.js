import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";


export default function Post(props) {

    
    return (

        <Box>
            <PostInfo>
                <ImgProfile src={props.profilePicture} />
            </PostInfo>
            <PostContainer>
                <Author>{props.postAuthor}</Author>
                <Description>{props.postDescription}</Description>
                <Link>{props.postLink}</Link>
            </PostContainer>
        </Box>
    );
}


const Box = styled.div`
    background: #171717;
    border-radius: 16px;
    width: 100%;
    padding: 20px;
    display: flex;
    margin-top: 30px;
`;
const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
`;
const PostContainer = styled.div`
    width: 100%;
    margin-left: 20px;
`;
const ImgProfile = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;
const Author = styled.h2`
   font-family: 'Lato';
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #fff;
`;
const Description = styled.h3`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #B7B7B7;
    margin-top: 20px;
`;
const Link = styled.div`
    border: 1px solid #4D4D4D;
    margin-top: 20px;
    border-radius: 11px;
    height: 100px;
`;
