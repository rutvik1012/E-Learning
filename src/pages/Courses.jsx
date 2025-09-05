import React from 'react';
import { courses } from '../api/index.js';

// Courses Page Component
const Courses = ({ addToCart }) => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">All Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
                <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{course.price}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">{course.duration}</p>
                        <button onClick={() => addToCart(course)} className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-teal-700 transition-colors">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-12 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Featured Course Player</h3>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                    <video controls className="w-full rounded-lg shadow-md">
                        <source src={courses[0].videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="flex-1">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{courses[0].title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">This is a placeholder video player demonstrating the media gallery feature. In a real application, you could add custom playback controls and event listeners to track user progress.</p>
                        <div className="mt-4 p-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-md">
                            <p className="text-gray-500 dark:text-gray-400">The Canvas API could be used here to create custom visualizations, like quiz overlays at specific timestamps in the video.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Courses;
