import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tour Destinations | Akal Tours & Travels",
  description:
    "Explore Shimla, Manali, Amritsar tour destinations and get custom itineraries with cab services.",
};

const destinations = [
  {
    name: "Shimla",
    slug: "shimla",
    img: "/shimla.jpg",
  },
  {
    name: "Manali",
    slug: "manali",
    img: "/manali.jpg",
  },
  {
    name: "Amritsar",
    slug: "amritsar",
    img: "/amritsar.jpg",
  },
  {
    name: "Kufri",
    slug: "kufri",
    img: "/kufri.jpg",
  },
  {
    name: "Chitkul",
    slug: "chitkul",
    img: "/chitkul.jpg",
  },
  {
    name: "Dharamshala",
    slug: "dharamshala",
    img: "/dharamshala.jpg",
  },
  {
    name: "Chail",
    slug: "chail",
    img: "/chail.jpg",
  },
  {
    name: "Narkanda",
    slug: "narkanda",
    img: "/narkanda.jpg",
  },
  {
    name: "Mashobra",
    slug: "mashobra",
    img: "/mashobra.jpg",
  },
  {
    name: "Naldehra",
    slug: "naldehra",
    img: "/naldehra.jpg",
  },
  {
    name: "Gurudwara Shri Manikaran Sahib",
    slug: "manikaransahib",
    img: "/manikaransahib.jpg",
  },
];

export default function DestinationsPage() {
  const phone = process.env.phone;

  return (
    <article className="max-w-7xl mx-auto px-4 py-16">
      {/* PAGE TITLE */}
      <header className="max-w-3xl mb-12 animate-fade-up">
        <h1 className="text-4xl font-bold">Our Destinations</h1>
        <p className="mt-4 text-lg text-slate-600">
          Explore popular travel destinations and get a custom itinerary
          designed around your travel dates and preferences.
        </p>
      </header>

      {/* DESTINATION GRID */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((d, index) => {
          const message = `Hi, I am interested in a ${d.name} tour package. Please share itinerary details.`;
          const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
            message
          )}`;

          return (
            <article
              key={d.slug}
              className={`bg-white rounded-xl overflow-hidden border
                          transition hover:shadow-lg
                          animate-fade-up scroll-animate animate-delay-${index + 1}`}
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={d.img}
                  alt={`${d.name} tour destination`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{d.name}</h2>
                <p className="mt-2 text-slate-600">
                  Custom {d.name} tour packages with flexible itineraries.
                </p>

                {/* CTAs */}
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition hover:bg-teal-800"
                  >
                    Get Itinerary
                  </a>

                  <Link
                    href={`/destinations/${d.slug}`}
                    className="text-sm text-slate-500 hover:underline"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </article>
  );
}
