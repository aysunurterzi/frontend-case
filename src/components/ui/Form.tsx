import { PropsWithChildren } from 'react';
import { FieldValues, FormProvider, useForm, UseFormProps } from 'react-hook-form';

type FormComponentProps<T extends FieldValues> = {
    onSubmit: (data: T) => void;
    resolver?: any;
} & Omit<UseFormProps<T>, 'resolver'>;

export const Form = <T extends FieldValues>({
    onSubmit,
    children,
    resolver,
    defaultValues,
    ...rest
}: PropsWithChildren<FormComponentProps<T>>) => {
    const methods = useForm<T>({ 
        ...rest, 
        resolver, 
        defaultValues 
    });

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormProvider {...methods}>
                {children}
            </FormProvider>
        </form>
    );
};