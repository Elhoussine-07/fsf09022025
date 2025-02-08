import React from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { engineeringData } from '../data/engineeringData';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function EngineeringProgram() {
  const { program } = useParams<{ program?: string }>();

  if (!program) {
    return <div>Programme non spécifié ou non trouvé.</div>;
  }

  const upperCaseProgram = program.toUpperCase();
  const programData = engineeringData[upperCaseProgram] || null;

  if (!programData) {
    return (
      <div className="min-h-screen bg-[#020817] text-white pt-20 flex items-center justify-center">
        <p className="text-2xl">Programme non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fil d'Ariane */}
          <div className="flex items-center space-x-4 mb-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-300">{programData.name}</span>
          </div>

          {/* Titre du programme */}
          <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent glow-title">
            {programData.name}
          </h1>

          {/* Liste des cours par semestre */}
          <div className="space-y-16">
            {Object.entries(programData.courses).map(([semester, courses]) => (
              <div key={semester}>
                <h2 className="year-title">Semestre {semester}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((course) => (
                    <div key={course.code} className="glass-effect rounded-xl overflow-hidden card-hover blue-glow">
                      <div 
                        className="h-48 relative"
                        style={{
                          backgroundImage: `url('${course.background}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full">
                            {course.code}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">{course.name}</h3>
                        {course.details && course.details.length > 0 && (
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {course.details.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
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
