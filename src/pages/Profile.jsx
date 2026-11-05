import { useContext, useEffect } from "react"; // Se importa useEffect
import { UserContext } from "../context/UserContext";
const Profile = () => {

    const { email, logout, getProfile } = useContext(UserContext);

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className="container mt-5 text-center">
            <h2>Perfil de Usuario</h2>
            <p className="text-muted">Email: {email}</p>
            <button onClick={logout} className="btn btn-danger">
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Profile;