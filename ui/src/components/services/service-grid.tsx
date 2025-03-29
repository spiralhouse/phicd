import { Service } from '@/types/service';
import { ServiceCard } from './service-card';

interface ServiceGridProps {
    services: Service[];
    onDeploy: (serviceId: string) => void;
}

export function ServiceGrid({ services, onDeploy }: ServiceGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onDeploy={onDeploy}
                />
            ))}
        </div>
    );
} 