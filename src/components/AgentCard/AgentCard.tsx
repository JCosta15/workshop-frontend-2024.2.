'use client';

import Link from "next/link";

type Props = {
  name: string;
  role: string;
  description: string;
  image: string;
  uuid: string;
};

export default function AgentCard({ name, role, description, image, uuid }: Props) {
  return (
    <div key={uuid} className="flex flex-col items-center gap-4 bg-black text-white rounded-xl p-10 w-80">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full"
      />
      <p className="text-slate-800 font-bold text-xl text-center text-white">{name}</p>
      <p className="text-gray-400">{role}</p>
      <p className="text-white flex-grow text-center">{description}</p>
      <Link href={`/character/${uuid}`} className='text-slate-200 bg-slate-800 p-4 rounded-xl'>
        More Details
      </Link>
    </div>
  );
}
