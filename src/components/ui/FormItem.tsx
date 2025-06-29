import React from 'react';
import { FormItemProps } from '../../types';

export const FormItem: React.FC<FormItemProps> = ({ 
    name, 
    label, 
    required = false,
    children 
}) => {
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
                ...(childElement.props.className ? { className: childElement.props.className } : {})
            })}
        </div>
    );
};