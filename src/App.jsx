// ✅ FIXED App.js with proper dark/light toggle
import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CartModal from './components/CartModal.jsx';
import { addToCart as addToCartApi } from './api/index.js';

const App = () => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [theme, setTheme] = useState('light');

    // Load theme and user from localStorage
    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }

        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
            setLoggedIn(true);
        }
    }, []);

    // Save user to localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const navigate = (page) => {
        setCurrentPage(page);
    };

    const handleLogin = (userData) => {
        setLoggedIn(true);
        setUser(userData);
        navigate('dashboard');
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUser(null);
        setCart([]);
        navigate('home');
    };

    const addToCart = async (course) => {
        const response = await addToCartApi(course.id);
        if (response.success) {
            setCart(prevCart => [...prevCart, course]);
            alert(`Added to cart: ${course.title}`);
        } else {
            alert('Failed to add to cart.');
        }
    };

    // ✅ Proper theme toggle
    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home navigate={navigate} />;
            case 'courses':
                return <Courses addToCart={addToCart} />;
            case 'login':
                return <Login handleLogin={handleLogin} />;
            case 'dashboard':
                return loggedIn ? <Dashboard purchasedCourses={cart} user={user} /> : <Login handleLogin={handleLogin} />;
            default:
                return <Home navigate={navigate} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans antialiased text-stone-900 dark:text-stone-50 bg-stone-50 dark:bg-zinc-900 transition-colors duration-300">
            <Header
                navigate={navigate}
                loggedIn={loggedIn}
                handleLogout={handleLogout}
                cartItemCount={cart.length}
                theme={theme}
                toggleTheme={toggleTheme}
                toggleCart={() => setShowCart(!showCart)}
                user={user}
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
            {showCart && <CartModal cart={cart} setShowCart={setShowCart} />}
            
        </div>
    );
};

export default App;
