'use client';

import { AgentType } from '@/components/AgentList/AgentList';
import { useEffect, useState } from 'react';

export default function AgentDetails({ id }: { id: string }) {
  const [data, setData] = useState<AgentType | null>(null);

  useEffect(() => {
    fetch(`https://valorant-api.com/v1/agents/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {data ? (
        <div key={data.uuid} className="flex flex-col items-center gap-4 bg-slate-200 text-slate-800 font-semibold text-xl p-10 rounded-xl">
          <img
            src={data.displayIcon}
            alt={data.displayName}
            className="w-60 h-60 rounded-xl object-contain"
          />
          <p className="text-2xl font-bold">Nome: {data.displayName}</p>
          <p>Descrição: {data.description}</p>
          <p>Icon: {data.displayIcon}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
