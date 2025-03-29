export type ServiceStatus = 'healthy' | 'warning' | 'error' | 'updating';

export type Environment = 'development' | 'staging' | 'production';

export interface ServiceDeployment {
    environment: Environment;
    version: string;
    status: ServiceStatus;
    lastDeployed: string;
}

export interface Service {
    id: string;
    name: string;
    description: string;
    team: string;
    repository: string;
    deployments: Record<Environment, ServiceDeployment>;
    status: ServiceStatus;
    lastUpdated: string;
} 