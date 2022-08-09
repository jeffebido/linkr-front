import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';
import UserContext from "../context/UserContext";

export default function TrendingHashtag(){

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { name, email, token } = user;

    


}