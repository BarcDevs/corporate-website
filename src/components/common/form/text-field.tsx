'use client'

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type MessageFieldProps = {
    label: string
    name: string
    placeholder?: string
    rows?: number
}

export const TextField:FC<MessageFieldProps> = ({
    label,
    name,
    placeholder,
    rows = 5,
}) => {
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
                        <Textarea
                            placeholder={placeholder}
                            rows={rows}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
