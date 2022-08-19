import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function NewPost() {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const [formLink, setFormLink] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [btnState, setBtnState] = useState();
  const [btnText, setBtnText] = useState("Publish");

  function enviaForm(event) {
    event.preventDefault();

    setBtnState("disabled");
    setBtnText("Publishing...");

    const API_URL = process.env.REACT_APP_API_URL;

    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    axios
      .post(
        `${API_URL}/publish`,
        {
          link: formLink,
          description: formDesc,
        },
        config
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((err) => {
        setBtnState("");
        setBtnText("Publish");
        alert("Houve um erro ao publicar seu link");
      });
  }

  return (
    <Box>
      <PostInfo>
        <ImgProfile src={user.image} />
      </PostInfo>
      <PostContainer>
        <Title>What are you going to share today?</Title>

        <form onSubmit={enviaForm}>
          <input
            type="text"
            placeholder="http://..."
            value={formLink}
            onChange={(e) => setFormLink(e.target.value)}
            required
          ></input>
          <textarea
            type="text"
            placeholder="Awesome article about ..."
            value={formDesc}
            onChange={(e) => setFormDesc(e.target.value)}
            rows="4"
          ></textarea>

          <button type="submit" className="btn" disabled={btnState}>
            {btnText}
          </button>
        </form>
      </PostContainer>
    </Box>
  );
}

const Box = styled.div`
  background: #fff;
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

  input,
  textarea {
    width: 100%;
    background: #efefef;
    border-radius: 5px;
    padding: 8px;
    color: #949494;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    border: 1px solid #fff;
    margin-top: 20px;
    box-sizing: border-box;
    transition: all 0.3s ease-in;
    &:focus {
      outline: none;
      border: 1px solid #777777;
    }
  }
  button {
    float: right;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    background: #1877f2;
    border-radius: 5px;
    padding: 8px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:disabled {
      background: #99c3f7;
      cursor: not-allowed;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const ImgProfile = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const Title = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #707070;
`;
