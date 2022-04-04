import Navbar from "../components/Navigation/Navbar";
import { useAuth } from "../context/authContext";

const Home = () => {

    const {user, logout, loading} = useAuth()

    const handleLogout = async () => {
        await logout()
    }

    if (loading) return <h1>loading</h1>

    return (
        <div>
            <Navbar />
            <h1 className='text-3xl font-bold underline'>Welcome {user.displayName || user.email}</h1>
            <button onClick={handleLogout}>logout</button>
         </div>
    );
};

export default Home;