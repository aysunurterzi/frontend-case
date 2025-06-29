export interface FormItemProps {
    name: string;
    label?: string;
    required?: boolean;
    children: React.ReactElement;
}

export interface FormComponentProps<T> {
    onSubmit: (data: T) => void;
    resolver?: any;
    defaultValues?: Partial<T>;
} 