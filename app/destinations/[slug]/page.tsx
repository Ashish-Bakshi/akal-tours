import Image from "next/image";
import { notFound } from "next/navigation";

const DATA = {
  shimla: { name: "Shimla", img: "/shimla.jpg" },
  manali: { name: "Manali", img: "/manali.jpg" },
  amritsar: { name: "Amritsar", img: "/amritsar.jpg" },
  kufri: { name: "Kufri", img: "/kufri.jpg" },
  chitkul: { name: "Chitkul", img: "/chitkul.jpg" },
  dharamshala: { name: "Dharamshala", img: "/dharamshala.jpg" },
  chail: { name: "Chail", img: "/chail.jpg" },
  narkanda: { name: "Narkanda", img: "/narkanda.jpg" },
  mashobra: { name: "Mashobra", img: "/mashobra.jpg" },
  naldehra: { name: "Naldehra", img: "/naldehra.jpg" },
  manikaransahib: { name: "Gurudwara Shri Manikaran Sahib", img: "/manikaransahib.jpg" },
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const place = DATA[slug as keyof typeof DATA];
  if (!place) return {};

  return {
    title: `${place.name} Tour Packages | Akal Tours`,
    description: `Custom ${place.name} tour packages with cab services.`,
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const place = DATA[slug as keyof typeof DATA];
  if (!place) notFound();

  const phone = process.env.phone;
  const message = `Hi, I am interested in a ${place.name} tour package. Please share itinerary details.`;
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold animate-fade-up">
        {place.name} Tour Packages
      </h1>

      <div className="relative h-72 mt-6 rounded-xl overflow-hidden animate-fade-up animate-delay-1">
        <Image
          src={place.img}
          alt={`${place.name} tour destination`}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-6 text-lg text-slate-600 animate-fade-up scroll-animate flex">
        Get a custom itinerary for {place.name} with flexible travel planning.
      </p>

      <section className="mt-10 bg-teal-700 text-white rounded-xl p-8 text-center animate-fade-up scroll-animate">
        <h2 className="text-2xl font-semibold">Get Custom Itinerary</h2>
        <p className="mt-2 text-teal-100">
          Contact us on WhatsApp for a personalized travel plan.
        </p>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-orange-500 px-6 py-3 rounded-lg font-medium transition hover:bg-orange-600"
        >
          Contact on WhatsApp
        </a>
      </section>
    </article>
  );
}
