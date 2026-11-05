import { useState, useContext } from 'react'; // 👈 1. Importamos useContext
import { UserContext } from '../context/UserContext'; // 👈 2. Importamos UserContext

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Extraemos el método register desde UserContext
    const { register } = useContext(UserContext);

    const handelSubmit = async (e) => {
        e.preventDefault();

        // Validación que ningún campo esté vacío
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        // Validación password, debe tener al menos 6 caracteres
        if (password.length < 6) {
            alert('El password debe tener al menos 6 caracteres');
            return;
        }

        // Validación, ambas password deben ser iguales
        if (password !== confirmPassword) {
            alert('El password y la confirmación de la contraseña debe ser iguales');
            return;
        }

        // Registro exitoso
        const success = await register(email, password);

        if (success) {
            alert('¡Te has registrado exitosamente!');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className='container mt-5 mb-5' style={{ maxWidth: '400px' }}>
            <h2 className='mb-4'>Register</h2>
            <form onSubmit={handelSubmit}>

                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-dark w-100'>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;