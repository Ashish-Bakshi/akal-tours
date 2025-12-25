import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-teal-700">
          Akal Tours & Travels
        </Link>

        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/destinations">Destinations</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
