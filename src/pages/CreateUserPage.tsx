import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { Input } from '../components/ui/Input';
import { UserService } from '../services/userService';
import { ValidationService } from '../services/validationService';
import { UserFormData, ValidationErrors } from '../types';

const CreateUserPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<UserFormData>({
        fullname: '',
        email: '',
        password: '',
        rememberMe: false,
    });
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = (): boolean => {
        const newErrors = ValidationService.validateUserForm(formData);
        setErrors(newErrors);
        return ValidationService.isValidForm(newErrors);
    };

    const handleInputChange = (field: keyof UserFormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field as keyof ValidationErrors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                await UserService.createUser(formData);
                UserService.saveUserData(formData);
                navigate('/user-data', { state: formData });
            } catch (error) {
                console.error('Error creating user:', error);
            } finally {
                setIsLoading(false);
            }
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
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <Input
                                id="fullname"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.fullname}
                                onChange={(e) => handleInputChange('fullname', e.target.value)}
                                hasError={!!errors.fullname}
                                errorMessage={errors.fullname}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                hasError={!!errors.email}
                                errorMessage={errors.email}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                hasError={!!errors.password}
                                errorMessage={errors.password}
                                required
                            />
                        </div>

                        <Checkbox
                            id="rememberMe"
                            label="Remember me"
                            checked={formData.rememberMe}
                            onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                        />

                        <div className="pt-4">
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                loading={isLoading}
                                loadingText="Creating Account..."
                                className="w-full h-12 text-base font-semibold transform hover:scale-[1.02]"
                                disabled={isLoading}
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