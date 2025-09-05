import React from 'react';

const testimonials = [
    { text: "EduStream is a game-changer! The courses are incredibly well-structured and the interface is a joy to use.", author: "Alex R." },
    { text: "I learned so much in such a short time. The interactive quizzes and responsive design make learning effortless.", author: "Maria G." },
    { text: "Highly recommend! The content is top-notch and the platform is intuitive and beautiful.", author: "Ben T." },
];

const Home = ({ navigate }) => {
    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="text-center py-20 px-4">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">Learn Without Limits</h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay-1">Explore thousands of courses from industry experts. Master new skills, build a career, and achieve your goals.</p>
                <button
                    onClick={() => navigate('courses')}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    Start Learning Now
                </button>
            </section>

            {/* Featured Courses Section */}
            <section className="w-full py-16 bg-stone-100 dark:bg-zinc-800 px-4">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold text-center mb-10">Featured Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Course Card 1 */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
                            <h4 className="text-xl font-bold mb-2">Web Development 101</h4>
                            <p className="text-gray-600 dark:text-gray-400">Build your first website from scratch with HTML, CSS, and JavaScript.</p>
                        </div>
                        {/* Course Card 2 */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
                            <h4 className="text-xl font-bold mb-2">Digital Marketing Fundamentals</h4>
                            <p className="text-gray-600 dark:text-gray-400">Learn to grow your brand online and reach a global audience.</p>
                        </div>
                        {/* Course Card 3 */}
                        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
                            <h4 className="text-xl font-bold mb-2">Introduction to UI/UX Design</h4>
                            <p className="text-gray-600 dark:text-gray-400">Create intuitive and beautiful user interfaces for web and mobile apps.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-16 px-4">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold text-center mb-10">What Our Students Say</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-stone-100 dark:bg-zinc-800 rounded-lg p-6 shadow-md">
                                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                                <p className="font-semibold text-right">- {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
