import { useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { CartProvider } from './context/CartContext';
import { PizzaProvider } from './context/PizzaContext';
import { UserContext } from './context/UserContext'; 

function App() {
    // Tenems el estado del token desde UserContext
    const { token } = useContext(UserContext);

    return (
        <PizzaProvider>
            <CartProvider>
                <div className='min-vh-100 d-flex flex-column'>
                    <Navbar />
                    <div className='flex-grow-1'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/pizza/:id" element={<Pizza />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route
                                path="/register"
                                element={!token ? <Register /> : <Navigate to="/" />}
                            />
                            <Route
                                path="/login"
                                element={!token ? <Login /> : <Navigate to="/" />}
                            />
                            <Route
                                path="/profile"
                                element={token ? <Profile /> : <Navigate to="/login" />}
                            />
                            <Route path="/404" element={<NotFound />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </CartProvider>
        </PizzaProvider>
    );
}

export default App;