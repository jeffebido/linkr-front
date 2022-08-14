import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

export default function Header() {

    
    return (

        <Navbar>
            <Logo>linkr</Logo>
            <UserInfo>
                <IoChevronDown />
                <ProfilePicture src=""/>
            </UserInfo>
        </Navbar>
    );
}


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
    font-family: 'Passion One', cursive;
    color: #ffff;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
`;
const ProfilePicture = styled.img`
   height: 50px;
   width: 50px;
   border-radius: 25%;
   margin-left: 15px;
`;
const UserInfo = styled.div`
   display: flex;
   align-items: center;
   color: #ffff;
   font-size: 30px;
`;
