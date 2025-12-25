export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm">
        <p>© {new Date().getFullYear()} Akal Tours & Travels</p>
        <p className="mt-2">
          Custom tours for Shimla, Manali, Amritsar & more.
        </p>
      </div>
    </footer>
  );
}
