import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="flex justify-between items-center px-4">
        
        <div className="flex-none">
          <img
            src="/images/valorant-logo.png"
            alt="Valorant Logo"
            className="w-16 h-auto"
          />
        </div>
        
        <nav className="flex-1 flex justify-center space-x-4">
          <Link href="/" className="text-white hover:text-red-500">
            Home
          </Link>
          <Link href="/agents" className="text-white hover:text-red-500">
            Agents
          </Link>
        </nav>
      </div>
    </header>
  );
}
