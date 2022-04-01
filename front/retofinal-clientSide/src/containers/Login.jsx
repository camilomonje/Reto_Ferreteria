import React from "react";
import '../assets/styles/containers/login.scss'
import Logo from '../assets/img/logo.png'

function Login(){
    return (
      <>
        <div className="div-logo">
          <img src={Logo} alt="" />
        </div>
        <form action=""className="form-login">
            <label htmlFor="" className="from-login-label">
                E-mail
                <input type="text" placeholder="INGRESE E-MAIL"/>
            </label>
            <label htmlFor="">
                Contraseña
                <input type="password" placeholder="INGRESE E-MAIL"/>
                
            </label>
            <input type="submit" value="Ingresar" />
        </form>
        
      </>
    );
}


export default Login