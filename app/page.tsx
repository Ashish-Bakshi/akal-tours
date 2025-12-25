import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Akal Tours & Travels | Shimla Manali Amritsar Tours",
  description:
    "Get custom itineraries and cab services for Shimla, Manali and Amritsar.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[80vh]">
        <Image
          src="/hero.jpg"
          alt="Travel destinations in India"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4">
          <div className="text-white max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold">
              Tour Packages & Cab Services
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Personalized itineraries for Shimla, Manali, Amritsar and more.
            </p>
            <Link
              href="/destinations"
              className="inline-block mt-6 bg-orange-500 px-6 py-3 rounded-lg font-medium transition hover:bg-orange-600"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 py-16 animate-fade-up scroll-animate">
        <h2 className="text-3xl font-semibold mb-8">
          Popular Destinations
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Shimla", slug: "shimla", img: "/shimla.jpg" },
            { name: "Manali", slug: "manali", img: "/manali.jpg" },
            { name: "Amritsar", slug: "amritsar", img: "/amritsar.jpg" },
          ].map((d, i) => (
            <article
              key={d.slug}
              className={`bg-white rounded-xl overflow-hidden border
                          transition hover:shadow-lg
                          animate-fade-up scroll-animate animate-delay-${i + 1}`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={d.img}
                  alt={`${d.name} tour destination`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{d.name}</h3>
                <p className="mt-2 text-slate-600">
                  Custom {d.name} tour packages with cab services.
                </p>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="inline-block mt-4 text-teal-700 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
