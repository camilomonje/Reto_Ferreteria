import Navbar from "../components/Navigation/Navbar";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) return <h1>loading</h1>;

  return (
      <div className=" h-screen">
    <Navbar />
    <div className="bg-slate-300 text-black flex mt-40">
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-xl mb-4 "><strong>BIENVENIDO</strong></p>
        <p className="text-xl mb-4">{user.displayName || user.email}</p>
        
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
