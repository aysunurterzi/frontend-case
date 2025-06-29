import i18n from '../locales';
import { UserFormData, ValidationErrors } from '../types/index';

export class ValidationService {
    static validateUserForm(formData: UserFormData): ValidationErrors {
        const errors: ValidationErrors = {};

        // Email validation
        if (!formData.email.trim()) {
            errors.email = (i18n as any).t('validation.emailRequired');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = (i18n as any).t('validation.emailInvalid');
        }

        // Password validation
        if (!formData.password.trim()) {
            errors.password = (i18n as any).t('validation.passwordRequired');
        } else if (formData.password.length < 6) {
            errors.password = (i18n as any).t('validation.passwordMinLength');
        } else if (!/^[a-zA-Z0-9]+$/.test(formData.password)) {
            errors.password = (i18n as any).t('validation.passwordAlphanumeric');
        }

        return errors;
    }

    static isValidForm(errors: ValidationErrors): boolean {
        return Object.keys(errors).length === 0;
    }
} 