import { Service, ServiceStatus, Environment, ServiceDeployment } from '@/types/service';

const environments: Environment[] = ['development', 'staging', 'production'];
const teams = ['Platform', 'Frontend', 'Backend', 'Data'];
const statuses: ServiceStatus[] = ['healthy', 'warning', 'error', 'updating'];

function randomStatus(): ServiceStatus {
    return statuses[Math.floor(Math.random() * statuses.length)];
}

function createMockDeployment(env: Environment) {
    return {
        environment: env,
        version: `v${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`,
        status: randomStatus(),
        lastDeployed: new Date(Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)).toISOString(),
    };
}

export const mockServices: Service[] = Array.from({ length: 12 }, (_, i) => ({
    id: `service-${i + 1}`,
    name: `Service ${i + 1}`,
    description: `A mock service for demonstration purposes`,
    team: teams[i % teams.length],
    repository: `github.com/org/service-${i + 1}`,
    deployments: environments.reduce((acc, env) => ({
        ...acc,
        [env]: createMockDeployment(env),
    }), {} as Record<Environment, ServiceDeployment>),
    status: randomStatus(),
    lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(),
})); 