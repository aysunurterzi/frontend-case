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
                <label className="flex items-start space-x-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                        <input
                            ref={ref}
                            type="checkbox"
                            className={`
                                w-5 h-5 text-indigo-600 bg-gray-100 rounded-md
                                focus:outline-none
                                hover:bg-gray-200 transition-all duration-200
                                checked:bg-indigo-600 checked:hover:bg-indigo-700
                                disabled:opacity-50 disabled:cursor-not-allowed
                                border border-gray-300 checked:border-indigo-600 appearance-none
                                ${hasError ? 'bg-red-100 border-red-300' : ''}
                                ${className}
                            `}
                            {...props}
                        />
                        {/* Custom checkmark */}
                        <svg 
                            className="absolute w-3 h-3 text-white pointer-events-none opacity-0 transition-opacity duration-200"
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            style={{
                                opacity: props.checked ? 1 : 0
                            }}
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                            {label}
                            {required && <span className="text-red-500 ml-1">*</span>}
                        </span>
                    </div>
                </label>
                {hasError && errorMessage && (
                    <p className="text-sm text-red-600 ml-8">{errorMessage}</p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';