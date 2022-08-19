import { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import UserContext from "../../context/UserContext";
import { deleteLocal } from "../../utils/localStorageFunctions";

export default function Header() {
  const [turnChevron, setTurnChevron] = useState(false);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  function logout() {
    if (!window.confirm("Você realmente deseja sair do aplicativo?")) return;
    deleteLocal("linkrUserdata");
    navigate("/");
  }
  return (
    <Navbar>
      <Logo onClick={() => navigate(`/timeline`)}>linkr</Logo>
      <UserInfo>
        <Chevron
          transfrom={turnChevron ? "rotate(180deg)" : "rotate(0deg)"}
          onClick={() => setTurnChevron(!turnChevron)}
        />
        <Toolbar display={turnChevron ? "inherit" : "none"}>
          <Link to="/">
            <span onClick={() => logout()}>Logout</span>
          </Link>
        </Toolbar>

        <ProfilePicture src={user.image} />
      </UserInfo>
    </Navbar>
  );
}

const Toolbar = styled.div`
  width: 150px;
  height: 43px;

  background: #171717;
  border-radius: 0px 0px 0px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  top: 72px;
  right: 0;

  display: ${({ display }) => display};

  span,
  a {
    font-size: 17px;
    color: #ffffff;
    font-weight: bold;
    margin-top: 12px;
    font-family: "Lato", sans-serif;
    text-decoration: none;
  }

  span:hover,
  a:hover {
    cursor: pointer;
    color: #1877f2;
  }
`;

const Chevron = styled(IoChevronDown)`
  position: absolute;

  right: 75px;
  top: 20px;

  transform: ${({ transfrom }) => transfrom};

  color: white;

  :hover {
    cursor: pointer;
    color: #1877f2;
  }
`;

const Navbar = styled.div`
  background: #151515;
  position: fixed;
  z-index: 100;
  height: 72px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const Logo = styled.div`
  font-family: "Passion One", cursive;
  color: #ffff;
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  letter-spacing: 0.05em;
`;
const ProfilePicture = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 15px;
  object-fit: cover;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: #ffff;
  font-size: 30px;
`;
