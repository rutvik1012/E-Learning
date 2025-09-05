import React, { useState } from 'react';
import { login } from '../api/index.js';

// Login/Signup Form Component
const Login = ({ handleLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // Client-side form validation
    const validateForm = (formData) => {
        const errors = {};
        if (isSignUp && !formData.name) {
            errors.name = 'Name is required.';
        }
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email address.';
        }
        if (!formData.password || formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm({ name, email, password })) {
            return;
        }
        // Simulate a backend login/signup request
        const response = await login(email, password, isSignUp ? name : undefined);
        if (response.success) {
            handleLogin(response.user);
        } else {
            alert(response.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 min-h-screen">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">{isSignUp ? 'Sign Up' : 'Login'}</h2>
                <form onSubmit={handleFormSubmit}>
                    {isSignUp && (
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    validateForm({ name: e.target.value, email, password });
                                }}
                                className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                required
                            />
                            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateForm({ name, email: e.target.value, password });
                            }}
                            className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                            required
                        />
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validateForm({ name, email, password: e.target.value });
                            }}
                            className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                            required
                            minLength="6"
                        />
                        {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                    >
                        {isSignUp ? 'Sign Up' : 'Log In'}
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    {isSignUp ? 'Already have an account?' : 'Need an account?'}
                    <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 ml-1 hover:underline">
                        {isSignUp ? 'Login' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;