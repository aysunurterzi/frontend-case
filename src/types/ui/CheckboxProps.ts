export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hasError?: boolean;
    errorMessage?: string;
    required?: boolean;
} 