export const metadata = {
  title: "Contact Us | Akal Tours & Travels",
  description:
    "Contact Akal Tours & Travels for custom tour packages and cab services.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-slate-600">
        Reach out to us on WhatsApp for quick assistance and custom itineraries.
      </p>

      <a
        href={`https://wa.me/${process.env.phone}`}
        className="inline-block mt-6 bg-teal-700 text-white px-6 py-3 rounded-lg font-medium"
      >
        Contact on WhatsApp
      </a>
    </main>
  );
}
