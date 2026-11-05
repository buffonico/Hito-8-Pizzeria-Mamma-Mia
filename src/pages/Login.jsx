import { useState, useContext } from "react"; // useContext
import { UserContext } from "../context/UserContext"; // Se importa UserContext

const Login = () => {
    // Estados para email y password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Se extrae la función login desde  UserContext
    const { login } = useContext(UserContext);

    // Convertimos handleSubmit en async para esperar la respuesta del backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ningún campo esté vacío
        if (email.trim() === '' || password.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        // El password al menos debe tener 6 caracteres
        if (password.length < 6) {
            alert('El password debe tener al menos 6 caracteres');
            return;
        }

        // Se llamamos al método login del contexto (que hace el fetch a Render)
        const success = await login(email, password);

        if (success) {
            alert('¡Login exitoso!');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="container mt-5 mb-5" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>

                {/* Campo 1: email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="correo@ejemplo.com"
                    />
                </div>

                {/* Campo 2: password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingrese Password"
                    />
                </div>

                <button type="submit" className="btn btn-dark w-100">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
 