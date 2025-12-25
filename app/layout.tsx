import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Akal Tours & Travels",
  description:
    "Tour packages and cab services for Shimla, Manali, Amritsar and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 page-enter">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
