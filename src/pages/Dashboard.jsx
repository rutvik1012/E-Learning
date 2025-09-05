import React, { useState } from 'react';

const Dashboard = ({ purchasedCourses, user }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Mock data for dashboard
    const userStats = {
        coursesCompleted: purchasedCourses.length,
        hoursSpent: purchasedCourses.reduce((acc, course) => acc + parseFloat(course.duration), 0),
        quizzesPassed: 8, // Mock data
    };

    const handleWatchCourse = (course) => {
        setSelectedCourse(course);
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Welcome, {user?.name}!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Courses Purchased</h3>
                    <p className="text-5xl font-bold text-blue-500 mt-2">{userStats.coursesCompleted}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Hours Spent</h3>
                    <p className="text-5xl font-bold text-green-500 mt-2">{userStats.hoursSpent}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Quizzes Passed</h3>
                    <p className="text-5xl font-bold text-purple-500 mt-2">{userStats.quizzesPassed}</p>
                </div>
            </div>

            {selectedCourse ? (
                <div className="mt-12 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedCourse.title}</h3>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                            <video controls className="w-full rounded-lg shadow-md">
                                <source src={selectedCourse.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="flex-1">
                            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedCourse.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">{selectedCourse.description}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setSelectedCourse(null)} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-600 transition-colors">Back to Courses</button>
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Purchased Courses</h3>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {purchasedCourses.map(course => (
                            <li key={course.id} className="py-4 flex items-center justify-between">
                                <div>
                                    <span className="font-medium text-gray-900 dark:text-white">{course.title}</span>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{course.duration}</p>
                                </div>
                                <button onClick={() => handleWatchCourse(course)} className="bg-teal-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-teal-700 transition-colors">Watch</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
