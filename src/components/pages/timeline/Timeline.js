import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { Bars } from  'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";

import Header from "../../layout/Header";

import Post from "../../common/Post";
import NewPost from "../../common/NewPost";

export default function Timeline() {

    const navigate = useNavigate();

    const API_URL = process.env.REACT_APP_API_URL;

    const  user  = useContext(UserContext);
    
    const [posts, setPosts] = useState();
    const [hideLoading, setHideLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        const promise = axios.get(`${API_URL}/timeline`, config).catch(function (error) {
            if (error.response) {
                
                switch (error.response.status) {
                    case 404:
                        setHideLoading(true);
                        setShowError(true);
                        setErrorMessage('There are no posts yet');
                      break;
                    case 401:
                        navigate("/");
                      break;
                    default:
                        setHideLoading(true);
                        setShowError(true);
                        setErrorMessage('An error occured while trying to fetch the posts, please refresh the page');
                }
            }
        });

        promise.then(response => {

            if(response){
                setPosts(response.data);
            }
        });

    }, []);

    return (

        <>  
            <Header />
            <Root>
                <Container>
                    <Heading>timeline</Heading>
                    <NewPost />
                    {posts == null ? (<Loading display={hideLoading}><Bars height="80" width="80" radius="9" color='#fff' secondaryColor='#fff'/><h1>Loading...</h1></Loading>) : (
                        
                        posts.map( (post, index) => <Post post={post} key={index}/>)
                        
                    )}
                    <Error display={showError}>{errorMessage}</Error>
                </Container>
            </Root>
        </>
    );
}

const Root = styled.div`
    margin-top: 72px;
	width: 100%;
    height: 100%;
	display: flex;
    justify-content: center;
`;
const Container = styled.div`
	width: 700px;
    max-width: 700px;
`;
const Heading = styled.h1`
	font-size: 45px;
    line-height: 100px;
    font-weight: bold;
    color: #fff;
    font-family: 'Oswald', sans-serif;
`;
const Loading = styled.div`
	width: 100%;
    height: 150px;
    color: #ffff;
    font-family: 'Lato';
    font-size: 30px;
    display: ${props => props.display ? "none": "flex"};
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;
const Error = styled.div`
    margin-top: 100px;
	width: 100%;
    height: 150px;
    color: #ffff;
    font-family: 'Lato';
    font-size: 20px;
    text-align: center;
    display: ${props => props.display ? "flex": "none"};
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;



