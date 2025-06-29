import { UserFormData, ValidationErrors } from '../types';

export class ValidationService {
    static validateUserForm(formData: UserFormData): ValidationErrors {
        const errors: ValidationErrors = {};

        // Email validation
        if (!formData.email.trim()) {
            errors.email = 'Please input your email!';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        // Password validation
        if (!formData.password.trim()) {
            errors.password = 'Please input your password!';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        } else if (!/^[a-zA-Z0-9]+$/.test(formData.password)) {
            errors.password = 'Password must be alphanumeric';
        }

        return errors;
    }

    static isValidForm(errors: ValidationErrors): boolean {
        return Object.keys(errors).length === 0;
    }
} 