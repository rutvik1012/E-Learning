import React, { useState } from 'react';
import { processPayment } from '../api/index.js';

const CartModal = ({ cart, setShowCart }) => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');
    const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setPaymentStatus('');

        const response = await processPayment(paymentDetails);
        
        setIsLoading(false);
        if (response.success) {
            setPaymentStatus('success');
        } else {
            setPaymentStatus('failed');
        }
    };

    const total = cart.reduce((sum, course) => sum + 49.99, 0);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg p-6 m-4">
                <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Your Shopping Cart</h3>
                    <button onClick={() => setShowCart(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                {!showPaymentForm ? (
                    <>
                        <div className="mt-4 max-h-80 overflow-y-auto">
                            {cart.length === 0 ? (
                                <p className="text-gray-600 dark:text-gray-400">Your cart is empty.</p>
                            ) : (
                                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {cart.map(course => (
                                        <li key={course.id} className="py-4 flex items-center justify-between">
                                            <span className="font-medium text-gray-900 dark:text-white">{course.title}</span>
                                            <span className="text-gray-700 dark:text-gray-300">$49.99</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">Total:</span>
                            <span className="text-xl font-bold text-blue-500">${total.toFixed(2)}</span>
                        </div>
                        <button onClick={() => cart.length > 0 && setShowPaymentForm(true)} className={`mt-6 w-full py-3 px-6 rounded-lg text-lg font-semibold transition-colors ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                            Proceed to Checkout
                        </button>
                    </>
                ) : (
                    <div className="mt-4">
                        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Payment Details</h4>
                        <form onSubmit={handlePaymentSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
                                <input
                                    type="text"
                                    value={paymentDetails.cardNumber}
                                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                                    className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex space-x-4">
                                <div className="flex-1">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Expiry Date</label>
                                    <input
                                        type="text"
                                        value={paymentDetails.expiry}
                                        onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })}
                                        className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2">CVV</label>
                                    <input
                                        type="text"
                                        value={paymentDetails.cvv}
                                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                                        className="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={`w-full py-3 px-6 rounded-lg text-lg font-semibold transition-colors ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                            </button>
                        </form>
                        {paymentStatus === 'success' && <p className="mt-4 text-center text-green-500 font-semibold">Payment Successful!</p>}
                        {paymentStatus === 'failed' && <p className="mt-4 text-center text-red-500 font-semibold">Payment Failed. Please try again.</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;
