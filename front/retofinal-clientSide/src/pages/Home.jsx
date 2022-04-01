import React from 'react';
import Logo from '../assets/img/logo.png'
import Login from '../containers/Login'


const Home = () => {
    return (
        <div className="div-welcome">
            <img src={Logo} alt="" />
            <h1>Ferreteria Raul</h1>
            <Login />
         </div>
    );
};

export default Home;