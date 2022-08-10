import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";

import Post from "../../common/Post";

export default function Timeline() {




    const [posts, setPosts] = useState();

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer token-aqqui` }
        };

        const promise = axios.get(`http://localhost:5000/timeline`, config);

        promise.then(response => {

            setPosts(response.data);
            //console.log(response.data)
        });

     
    }, []);


    return (

        <>  
            <Root>
                <Container>
                    <Heading>timeline</Heading>

                    {posts == null ? (<>Não há posts</>) : (
                        
                        posts.map( (post, index) => <Post profilePicture={post.picture_url} postAuthor={post.author} postDescription={post.description} postLink={post.url} key={index}/>)
                        
                    )}

                </Container>
            </Root>
        </>
    );
}

const Root = styled.div`
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

