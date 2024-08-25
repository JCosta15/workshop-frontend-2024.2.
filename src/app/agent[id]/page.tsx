'use client'

import AgentDetails from '@/components/AgentDetails/AgentDetails'
import CharacterDetails from '@/components/AgentDetails/AgentDetails'

interface Props {
  params: {
    id: string
  }
}

export default function Agent({ params }: Props) {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-24 py-4 bg-slate-800">
      <AgentDetails id={params.id}/>
    </main>
  )
}