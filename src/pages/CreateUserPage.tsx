import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { Input } from '../components/ui/Input';
import { PasswordInput } from '../components/ui/PasswordInput';
import { UserService } from '../services/userService';
import { UserFormData } from '../types/index';

const CreateUserPage: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<UserFormData>({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            rememberMe: false,
        },
        mode: 'onChange'
    });

    const watchRememberMe = watch('rememberMe');

    const onSubmit = async (data: UserFormData) => {
        setIsLoading(true);
        try {
            await UserService.createUser(data);
            UserService.saveUserData(data);
            navigate('/user-data', { state: data });
        } catch (error) {
            console.error('Error creating user:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                        <div className="space-y-2">
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <Input
                                id="fullname"
                                type="text"
                                placeholder="Enter your full name"
                                {...register('fullname')}
                                hasError={!!errors.fullname}
                                errorMessage={errors.fullname?.message}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                {...register('email', {
                                    required: 'Please input your email!',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                                hasError={!!errors.email}
                                errorMessage={errors.email?.message}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <PasswordInput
                                id="password"
                                placeholder="Enter your password"
                                {...register('password', {
                                    required: 'Please input your password!',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9]+$/,
                                        message: 'Password must be alphanumeric'
                                    }
                                })}
                                hasError={!!errors.password}
                                errorMessage={errors.password?.message}
                                required
                            />
                        </div>

                        <Checkbox
                            id="rememberMe"
                            label="Remember me"
                            checked={watchRememberMe}
                            {...register('rememberMe')}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setValue('rememberMe', e.target.checked);
                            }}
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