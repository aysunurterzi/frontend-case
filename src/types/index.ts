import { FieldValues } from 'react-hook-form';

// User related types
export interface UserFormData {
    fullname: string;
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface ValidationErrors {
    fullname?: string;
    email?: string;
    password?: string;
}

// UI Component types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    loading?: boolean;
    loadingText?: string;
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hasError?: boolean;
    errorMessage?: string;
    required?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
    errorMessage?: string;
}

export interface FormItemProps {
    name: string;
    label?: string;
    required?: boolean;
    children: React.ReactElement;
}

export interface FormComponentProps<T extends FieldValues> {
    onSubmit: (data: T) => void;
    resolver?: any;
    defaultValues?: Partial<T>;
}