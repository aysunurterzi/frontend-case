import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { Input } from '../components/ui/Input';

interface UserFormData {
    fullname: string;
    email: string;
    password: string;
    rememberMe: boolean;
}

interface ValidationErrors {
    fullname?: string;
    email?: string;
    password?: string;
}

const CreateUserPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<UserFormData>({
        fullname: '',
        email: '',
        password: '',
        rememberMe: false,
    });
    const [errors, setErrors] = useState<ValidationErrors>({});

    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};

        // Email validasyonu
        if (!formData.email.trim()) {
            newErrors.email = 'Please input your email!';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // Password validasyonu
        if (!formData.password.trim()) {
            newErrors.password = 'Please input your password!';
        } else if (!/^[a-zA-Z0-9]+$/.test(formData.password)) {
            newErrors.password = 'Password must be alphanumeric';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: keyof UserFormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Hata mesajını temizle
        if (errors[field as keyof ValidationErrors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
            navigate('/user-data', { state: formData });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                                Full Name
                            </label>
                            <Input
                                type="text"
                                placeholder="Enter your full name"
                                className="h-12 text-base"
                                value={formData.fullname}
                                onChange={(e) => handleInputChange('fullname', e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="h-12 text-base"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                hasError={!!errors.email}
                                errorMessage={errors.email}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                className="h-12 text-base"
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                hasError={!!errors.password}
                                errorMessage={errors.password}
                            />
                        </div>

                        <div className="space-y-2">
                            <Checkbox 
                                label="Remember me"
                                checked={formData.rememberMe}
                                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full h-12 text-base font-semibold transform hover:scale-[1.02]"
                            >
                                Create Account
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUserPage;