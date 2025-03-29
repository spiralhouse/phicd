import { Service } from '@/types/service';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, GitBranch, Clock } from 'lucide-react';

const statusColors = {
    healthy: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    updating: 'bg-blue-500',
} as const;

interface ServiceCardProps {
    service: Service;
    onDeploy: (serviceId: string) => void;
}

export function ServiceCard({ service, onDeploy }: ServiceCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onDeploy(service.id)}>
                            Deploy
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>View Logs</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${statusColors[service.status]}`} />
                    <span className="text-sm capitalize">{service.status}</span>
                    <Badge variant="secondary">{service.team}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <div className="mt-4 space-y-2">
                    {Object.entries(service.deployments).map(([env, deployment]) => (
                        <div key={env} className="flex items-center justify-between text-sm">
                            <span className="capitalize">{env}</span>
                            <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${statusColors[deployment.status]}`} />
                                <span>{deployment.version}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                    <GitBranch className="h-4 w-4" />
                    <span>{service.repository.split('/').pop()}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Updated {new Date(service.lastUpdated).toLocaleDateString()}</span>
                </div>
            </CardFooter>
        </Card>
    );
} 