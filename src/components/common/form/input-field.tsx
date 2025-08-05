'use client'

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

type InputFieldProps = {
    name: string
    label: string
    type?: string
    placeholder?: string
}

export const InputField = ({
    name,
    label,
    type = 'text',
    placeholder
}: InputFieldProps) => {
    const form = useFormContext()

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={'text-gray-700 font-semibold mb-2'}>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}
