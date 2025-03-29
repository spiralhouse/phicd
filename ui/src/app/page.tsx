'use client';

import { useState } from 'react';
import { ServiceGrid } from '@/components/services/service-grid';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockServices } from '@/data/mock-services';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('grid');

  const filteredServices = mockServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeploy = (serviceId: string) => {
    console.log(`Deploying service ${serviceId}`);
    // TODO: Implement deployment logic
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold">Services</h1>
          <div className="flex items-center justify-between">
            <Input
              type="search"
              placeholder="Search services..."
              className="max-w-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="w-[200px]" />
          </div>
        </div>

        <Tabs defaultValue="grid" value={view} onValueChange={setView}>
          <div className="flex justify-end mb-4">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid">
            <ServiceGrid services={filteredServices} onDeploy={handleDeploy} />
          </TabsContent>

          <TabsContent value="list">
            <div className="rounded-lg border">
              {/* TODO: Implement list view */}
              <p className="p-4 text-center text-muted-foreground">List view coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
