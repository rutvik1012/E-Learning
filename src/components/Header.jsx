import React from 'react';

const Header = ({ navigate, loggedIn, handleLogout, cartItemCount, theme, toggleTheme, toggleCart, user }) => {
    return (
        <header className="flex items-center justify-between p-4 shadow-md bg-stone-50 dark:bg-zinc-700 text-stone-900 dark:text-stone-50">
            <h1 onClick={() => navigate('home')} className="text-xl font-bold cursor-pointer">EduStream</h1>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-4 ">
                <button onClick={() => navigate('home')} className="hover:text-teal-500 text-lg font-bold  ">Home</button>
                <button onClick={() => navigate('courses')} className="hover:text-teal-500 text-lg font-bold">Courses</button>
                {loggedIn && (
                    <button onClick={() => navigate('dashboard')} className="hover:text-teal-500 text-lg font-bold">Dashboard</button>
                )}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
                {/* Theme toggle button */}
                <button onClick={toggleTheme} className="hover:text-teal-500">
                    {theme === 'dark' ? (
                        // 🌙 Show moon when in dark mode
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                             strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75
                                     c-5.385 0-9.75-4.365-9.75-9.75
                                     0-1.33.266-2.597.748-3.752
                                     A9.753 9.753 0 0 0 3 10.5
                                     a9.753 9.753 0 0 0 16.5 7.681
                                     9.715 9.715 0 0 1-2.913-2.679" />
                        </svg>
                    ) : (
                        // ☀️ Show sun when in light mode
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                             strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                                  d="M12 3v2.25m6.364.364-.364-.364M21 12h-2.25
                                     m.364 6.364-.364-.364M12 21v-2.25
                                     m-6.364-.364.364.364M3 12H5.25
                                     m-.364-6.364.364.364M18 12a6 6 0 1 1-12 0
                                     6 6 0 0 1 12 0Z" />
                        </svg>
                    )}
                </button>

                {/* Auth + Cart */}
                {loggedIn ? (
                    <>
                        <span className="font-semibold">Welcome, {user?.name}!</span>
                        <button onClick={handleLogout} className="hover:text-teal-500">Logout</button>
                        <button onClick={toggleCart} className="relative hover:text-teal-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 3h1.386c.51 0 .955.343 1.054.853L6.44 9H18.5
                                         a.75.75 0 0 1 .641.353l.354.518
                                         c.618.914-.492 2.394-1.632 2.394H9.42
                                         a.75.75 0 0 0-.641.353l-.354.518
                                         c-.618.914.492 2.394 1.632 2.394H18.5M10.5 19.5h-1
                                         a.5.5 0 0 1-.5-.5v-1
                                         a.5.5 0 0 1 .5-.5h1
                                         a.5.5 0 0 1 .5.5v1
                                         a.5.5 0 0 1-.5.5ZM17.5 19.5h-1
                                         a.5.5 0 0 1-.5-.5v-1
                                         a.5.5 0 0 1 .5-.5h1
                                         a.5.5 0 0 1 .5.5v1
                                         a.5.5 0 0 1-.5.5Z" />
                            </svg>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs font-bold">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </>
                ) : (
                    <button 
                        onClick={() => navigate('login')} 
                        className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Login
                    </button>
                )}
                
            </div>
        </header>
    );
};

export default Header;