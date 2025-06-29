import { PropsWithChildren } from 'react';
import { FormComponentProps } from '../../types';

export const Form = <T extends Record<string, any>>({
    onSubmit,
    children,
    ...rest
}: PropsWithChildren<FormComponentProps<T>>) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
  };

    return (
        <form onSubmit={handleSubmit} {...rest}>
            {children}
        </form>
    );
};