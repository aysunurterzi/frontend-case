import { Link, Navigate, useLocation } from 'react-router-dom';

const UserDataPage = () => {
    const location = useLocation();
    const userData = location.state;

    if (!userData) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Account Created!</h1>
                    <p className="text-gray-600">Your account has been successfully created</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="space-y-6">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Success!</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
                                
                                <div className="grid gap-4">
                                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                        <span className="text-sm font-medium text-gray-600">Full Name:</span>
                                        <span className="text-sm text-gray-900">{userData.fullname || 'Not provided'}</span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                        <span className="text-sm font-medium text-gray-600">Email:</span>
                                        <span className="text-sm text-gray-900">{userData.email}</span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                        <span className="text-sm font-medium text-gray-600">Password:</span>
                                        <span className="text-sm text-gray-900">••••••••</span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-sm font-medium text-gray-600">Remember Me:</span>
                                        <span className={`text-sm px-2 py-1 rounded-full ${
                                            userData.rememberMe 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {userData.rememberMe ? 'Yes' : 'No'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link
                                to="/"
                                className="block w-full h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-indigo-200 text-center leading-[48px]"
                            >
                                Create Another Account
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        Thank you for using our service!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserDataPage;