import { PropsWithChildren } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { FormComponentProps } from '../../types';

export const Form = <T extends FieldValues>({
    onSubmit,
    children,
    resolver,
    defaultValues,
    ...rest
}: PropsWithChildren<FormComponentProps<T>>) => {
    const methods = useForm<T>({ 
        ...rest, 
        resolver
    });

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormProvider {...methods}>
                {children}
            </FormProvider>
        </form>
    );
};