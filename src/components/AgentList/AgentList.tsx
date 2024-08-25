'use client';

import AgentCard from '@/components/AgentCard/AgentCard';
import React, { useEffect, useState } from 'react';

export interface Root {
  status: number;
  data: AgentType[];
}

export interface AgentType {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  role: Role;
}

export interface Role {
  displayName: string;
}

const AgentList = () => {
  const [agents, setAgents] = useState<AgentType[]>([]);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then((response) => response.json())
      .then((data: Root) => setAgents(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {agents.map((agent) => (
        <AgentCard
          key={agent.uuid}
          uuid={agent.uuid}
          name={agent.displayName}
          role={agent.role.displayName}
          description={agent.description}
          image={agent.displayIcon}
        />
      ))}
    </div>
  );
};

export default AgentList;
