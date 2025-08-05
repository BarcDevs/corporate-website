import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react'

type FormInputProps = {
    type?: HTMLInputTypeAttribute
    name: string
    value: string
    placeholder: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    required: boolean
}

const FormInput: FC<FormInputProps> = ({
    type = 'text',
    name,
    value,
    placeholder,
    onChange,
    required
}) =>
    (
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-400 hover:border-blue-300 text-gray-700 placeholder-gray-400"
            placeholder={placeholder}
        />
    )

export default FormInput
