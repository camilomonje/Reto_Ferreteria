import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/credentials";
import { useAuth } from "../context/authContext";
import Alert from "../components/Alert";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(userCredentials);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Email Invalido");
      } else if (error.code === "auth/wrong-password") {
        setError("La contraseña es Incorrecta");
      } else if (error.code === "auth/user-not-found") {
        setError("El usuario no esta registrado");
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.code);
    }
  };

  return (
    <div>
      {error && <Alert message={error} /> }
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
      <button onClick={handleGoogleSignin}>Google Login</button>
    </div>
  );
};
