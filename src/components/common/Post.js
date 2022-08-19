import styled from "styled-components";

export default function Post(props) {
  return (
    <Box>
      <PostInfo>
        <ImgProfile src={props.post.picture_url} />
      </PostInfo>
      <PostContainer>
        <Author>{props.post.author}</Author>
        <Description>{props.post.description}</Description>
        <a
          href={props.post.url}
          target="_blank"
          title={props.post.urlTitle}
          rel="noreferrer"
        >
          <UrlData>
            <UrlInfo>
              <h1>{props.post.urlTitle}</h1>
              <h4>{props.post.urlDescription.slice(0, 150) + "..."}</h4>
              <p>{props.post.url.slice(0, 60) + "..."}</p>
            </UrlInfo>
            <UrlImage bkg={props.post.urlImage}></UrlImage>
          </UrlData>
        </a>
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
  font-family: "Lato";
  a {
    text-decoration: none;
  }
`;
const ImgProfile = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const Author = styled.h2`
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #fff;
`;
const Description = styled.h3`
  font-family: "Lato";
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
  margin-top: 20px;
`;
const UrlData = styled.div`
  border: 1px solid #4d4d4d;
  margin-top: 20px;
  border-radius: 11px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  transition: 200ms all ease-in;
  :hover {
    background-color: #2d2d2d;
  }
`;
const UrlInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  h1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
  }
  p {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #cecece;
  }
  h4 {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
  }
`;
const UrlImage = styled.div`
  height: 100%;
  width: 150px;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;
  background: url(${(props) => props.bkg || ""});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
