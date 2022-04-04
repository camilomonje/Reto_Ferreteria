import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/credentials";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, user.email,user.password)
        console.log(userCredentials)
        navigate('/')
    } catch (error) {
      console.log(error.code)
      setError(error.code)
        // if (error.code === "auth/invalid-email"){
        //     setError("Email Invalido")
        // } else if (error.code === "auth/weak-password") {
        //     setError("La contraseña debe tener 6 o más caracteres")
        // } else if (error.code === "auth/email-already-in-use")  {
        //     setError("El usuario ya esta registrado")
        // }
    }
   

  };

  return (
    <div>
        {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.ltd"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />

        <button>Iniciar Sesion</button>
      </form>
    </div>
  );
};
