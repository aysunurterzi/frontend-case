import React from 'react';
import { InputProps } from '../../types/index';

export const Input: React.FC<InputProps> = ({
    hasError = false,
    errorMessage,
    className = '',
    type = 'text',
    ...props
}) => {
    const getAutocomplete = () => {
        if (type === 'email') return 'email';
        if (type === 'text' && props.id === 'fullname') return 'name';
        return undefined;
    };

    return (
        <div className="relative">
            <input
                type={type}
                className={`
                    w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                    ${hasError 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    }
                    ${className}
                `}
                autoComplete={getAutocomplete()}
                {...props}
            />
            {hasError && errorMessage && (
                <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
            )}
        </div>
    );
};