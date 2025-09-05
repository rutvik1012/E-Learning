// This file simulates the API layer. In a real application, these
// functions would make HTTP requests to a backend server.

let users = JSON.parse(localStorage.getItem('users')) || [];

const saveUsers = () => {
    localStorage.setItem('users', JSON.stringify(users));
};

export const courses = [
    { id: 1, title: 'Introduction to Web Development', duration: '12h 15m', thumbnail: 'https://placehold.co/400x225/3b82f6/fff?text=Web+Dev', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.',price:'$ 99.00' },
    { id: 2, title: 'Data Structures & Algorithms', duration: '10h 30m', thumbnail: 'https://placehold.co/400x225/10b981/fff?text=DSA+Course', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Master core concepts to write efficient and scalable code.',price:'$ 99.00' },
    { id: 3, title: 'Machine Learning Basics', duration: '14h 00m', thumbnail: 'https://placehold.co/400x225/ef4444/fff?text=ML+Basics', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'An introduction to the world of AI, covering key algorithms and models.',price:'$ 99.00' },
    { id: 4, title: 'UI/UX Design Fundamentals', duration: '12h 45m', thumbnail: 'https://placehold.co/400x225/f97316/fff?text=UI%2FUX', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Create beautiful and intuitive user interfaces with best practices.',price:'$ 99.00' },
    { id: 5, title: 'Advanced React Hooks', duration: '10h 50m', thumbnail: 'https://placehold.co/400x225/6366f1/fff?text=React+Hooks', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Dive deep into custom hooks, context, and state management.',price:'$ 99.00' }
];

export const login = (email, password, name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (name) { // Sign up
                const userExists = users.find(user => user.email === email);
                if (userExists) {
                    resolve({ success: false, message: 'User already exists.' });
                } else {
                    const newUser = { id: users.length + 1, name, email, password };
                    users.push(newUser);
                    saveUsers();
                    resolve({ success: true, user: newUser });
                }
            } else { // Login
                const user = users.find(user => user.email === email && user.password === password);
                if (user) {
                    resolve({ success: true, user });
                } else {
                    resolve({ success: false, message: 'Invalid credentials.' });
                }
            }
        }, 500);
    });
};

export const getUser = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) {
                resolve({ success: true, user });
            } else {
                resolve({ success: false, message: 'User not found.' });
            }
        }, 300);
    });
};

export const addToCart = (courseId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, message: `Added course ${courseId} to cart.` });
        }, 300);
    });
};

export const processPayment = (paymentDetails) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (paymentDetails.cardNumber.startsWith('4')) {
                resolve({ success: true, message: 'Payment successful!' });
            } else {
                resolve({ success: false, message: 'Payment failed. Please try again.' });
            }
        }, 1500);
    });
};
