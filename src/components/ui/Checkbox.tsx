import { forwardRef, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hasError?: boolean;
    errorMessage?: string;
    required?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ 
        label, 
        hasError = false,
        errorMessage,
        required = false,
        className = '', 
        ...props 
    }, ref) => {
        const errorClasses = hasError ? 'border-red-300 text-red-600 focus:ring-red-500' : '';
        
        const baseClasses = 'w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 transition-all duration-200';
        
        const combinedClasses = `${baseClasses} ${errorClasses} ${className}`.trim();

        return (
            <div className="space-y-1">
                <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        ref={ref}
                        className={combinedClasses}
                        {...props}
                    />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </span>
                </label>
                
                {hasError && errorMessage && (
                    <p className="text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errorMessage}
                    </p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';