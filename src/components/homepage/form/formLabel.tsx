import { FC } from 'react'

type FormLabelProps = {
    htmlFor: string
    label: string
}

const FormLabel: FC<FormLabelProps> = ({ htmlFor, label }) =>
    (
        <label
            htmlFor={htmlFor}
            className="block text-gray-700 font-semibold mb-2"
        >
            {label}
        </label>
    )

export default FormLabel
