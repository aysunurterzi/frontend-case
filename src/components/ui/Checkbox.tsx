import { forwardRef } from 'react';
import { CheckboxProps } from '../../types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ 
        label, 
        hasError = false,
        errorMessage,
        required = false,
        className = '', 
        ...props 
    }, ref) => {
        return (
            <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                        ref={ref}
                        type="checkbox"
                        className={`w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 ${
                            hasError ? 'border-red-500' : ''
                        } ${className}`}
                        {...props}
                    />
                    <span className="text-sm font-medium text-gray-700">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </span>
                </label>
                {hasError && errorMessage && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';