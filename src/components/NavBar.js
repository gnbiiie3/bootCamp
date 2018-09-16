import React, { Component } from 'react';
import styled from 'styled-components'

const NavBar = styled.div`
    background-image: url('/assets/img/top-bar-bg.png');
    background-repeat: repeat-x;
    height: 20vh;
    width: 100%;
    text-align: center;
    margin-top: 5%;
`

const Logo = styled.img`
    margin-top: -50px;
`


const index = () => (
    <NavBar>
       <Logo src='/assets/img/logo.png'/>
    </NavBar>
)

export default index;