import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { engineeringData } from '../data/engineeringData';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Engineering() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-300">Cycle Ingénieur</span>
          </div>

          <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent glow-title">
            Cycle Ingénieur
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(engineeringData).map(([key, program]) => (
              <div key={key} className="group relative overflow-hidden rounded-2xl glass-effect card-hover blue-glow">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-black/80 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${program.background}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                  }}
                ></div>
                <div className="relative p-8 min-h-[300px] flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold mb-4">{program.name}</h3>
                  <p className="text-gray-300 mb-6">{program.description}</p>
                  <Link 
                    to={`/Engineering/${key.toLowerCase()}`} // Lien dynamique vers le programme
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Voir les cours <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
