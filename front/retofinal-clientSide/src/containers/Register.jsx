import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/credentials";
import Alert from "../components/Alert";

export const Register = () => {
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
        await createUserWithEmailAndPassword(auth, user.email,user.password)
        navigate('/')
    } catch (error) {

        if (error.code === "auth/invalid-email"){
            setError("Email Invalido")
        } else if (error.code === "auth/weak-password") {
            setError("La contraseña debe tener 6 o más caracteres")
        } else if (error.code === "auth/email-already-in-use")  {
            setError("El usuario ya esta registrado")
        }
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

        <button>Register</button>
      </form>
    </div>
  );
};
