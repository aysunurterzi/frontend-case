import { get } from 'lodash';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormItemProps {
    name: string;
    label?: string;
    required?: boolean;
    children: React.ReactElement;
}

export const FormItem: React.FC<FormItemProps> = ({ 
    name, 
    label, 
    required = false,
    children 
}) => {
    const { register, formState: { errors } } = useFormContext();

    const error = get(errors, name);
    const hasError = !!error;
    const errorMessage = error?.message?.toString();

    const childElement = children as React.ReactElement<any>;

    return (
        <div className="space-y-2">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            {React.cloneElement(childElement, {
                id: name,
                ...register(name),
                hasError,
                errorMessage,
                ...(childElement.props.className ? { className: childElement.props.className } : {})
            })}
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
};