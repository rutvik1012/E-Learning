import React from 'react';

// Reusable Footer Component
const Footer = () => (
    <footer className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400 rounded-md">
        <p>&copy; {new Date().getFullYear()} EduStream. All rights reserved.</p>
    </footer>
);

export default Footer;
