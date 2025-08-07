import { servicesData } from '@/data/services'

const Services = ({}) => {
    const {services} = servicesData

    return (
        <div>
            <h4 className="text-lg font-semibold mb-4">
                שירותים
            </h4>
            <ul className="text-gray-300 space-y-2">
                {services.map((service, i) => (
                    <li key={i}>
                        {service.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Services
