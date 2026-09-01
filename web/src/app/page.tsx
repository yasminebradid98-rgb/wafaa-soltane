'use client'

import { useState } from 'react'

const projectsData = {
  photography: [
    {
      title: 'La lumière des années noires',
      description: `Dans l'Algérie des années 90, la décennie noire, la violence semblait partout : dans les rues, dans les regards, jusque dans les silences. Pourtant, derrière les murs clos, dans les interstices de la peur, des femmes ont continué de vivre, de résister, de rêver. Elles ont porté, souvent seules, le poids des disparitions, des deuils, des incertitudes.

Le début de cette série documentaire explore leurs voix, leurs luttes invisibles, leurs gestes du quotidien, en mêlant archives et récits intimes, pour rendre hommage à celles qui, dans la nuit de l'Histoire, ont maintenu la flamme de la vie.`,
      images: ['/photos/annees-noires-1.jpg', '/photos/annees-noires-2.jpg'],
    },
    {
      title: 'Marhoumoun',
      description: 'Série photographique dédiée à la mémoire et au recueillement.',
      images: ['/photos/marhoumoun-1.jpg'],
    },
    {
      title: 'Des Souvenirs Doux',
      description: 'Exploration visuelle des souvenirs intimes et nostalgiques.',
      images: ['/photos/souvenirs-1.jpg'],
    },
  ],
  videography: [],
  audiography: [],
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  return (
    <div className="font-sans bg-[#e2e1dd] text-zinc-900 min-h-screen px-6 md:px-20 py-10 selection:bg-zinc-300">
      {/* Navigation Minimaliste & Fine */}
      <header className="mb-20">
        <nav className="flex justify-center space-x-12 text-[11px] md:text-xs tracking-[0.25em] uppercase font-extralight text-zinc-800">
          <button 
            onClick={() => setSelectedProject(null)} 
            className="hover:text-black transition duration-300"
          >
            Biographie
          </button>

          {/* Dropdown Projets */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-black transition duration-300 py-2">
              Projets
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block pt-3 w-56 text-center z-50">
              <div className="bg-[#e2e1dd]/90 backdrop-blur-md p-3 border border-zinc-400/20 shadow-sm space-y-2">
                {projectsData.photography.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedProject(project)}
                    className="block w-full text-[11px] tracking-wide font-extralight text-zinc-700 hover:text-black transition duration-200"
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <a href="#contact" className="hover:text-black transition duration-300">
            Contact
          </a>
        </nav>
      </header>

      {/* Contenu Principal */}
      <main className="max-w-2xl mx-auto space-y-20">
        {selectedProject ? (
          /* VUE PROJET */
          <section className="space-y-10 animate-fadeIn">
            {/* Titre du projet */}
            <div className="flex justify-between items-baseline border-b border-zinc-400/20 pb-4">
              <h1 className="text-2xl md:text-4xl font-extralight tracking-wide text-zinc-900 lowercase">
                {selectedProject.title}
              </h1>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 hover:text-black transition"
              >
                [fermer]
              </button>
            </div>

            {/* Texte descriptif très fin */}
            {selectedProject.description && (
              <div className="text-xs md:text-sm leading-relaxed font-extralight text-zinc-700 whitespace-pre-line max-w-lg ml-auto">
                {selectedProject.description}
              </div>
            )}

            {/* Images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="space-y-8 pt-4">
                {selectedProject.images.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="w-full">
                    <img
                      src={imgUrl}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      className="w-full h-auto object-cover opacity-95"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : (
          /* VUE BIOGRAPHIE (Par défaut) */
          <section className="space-y-10">
            <h1 className="text-3xl md:text-4xl font-extralight tracking-tight text-zinc-900">
              Biographie
            </h1>

            <div className="text-xs md:text-sm leading-relaxed font-extralight text-zinc-700 space-y-5 max-w-lg ml-auto">
              <p>
                <strong className="font-light text-zinc-900">WAFAA SOLTANE</strong>, née en 1994 à Oran, a étudié la littérature française à l'Université d'Oran avant de se tourner vers la photographie documentaire.
              </p>
              <p>
                Son parcours artistique s'enrichit d'une formation auprès de la photographe Liasmine Fodil, suivie d'un mentorat approfondi avec Lola Khalfa dans le cadre de la première édition du projet Tilawin (2021-2022).
              </p>
              <p>
                Au sein de ce programme, Wafaa développe plusieurs projets photographiques qu'elle expose notamment à l'Institut français d'Oran, au Magasin du CNAC de Grenoble et à la Nuit de l'Année des Rencontres d'Arles.
              </p>
              <p>
                Elle poursuit son chemin en 2023 avec une résidence au MICT de Tunis, où elle mène un projet documentaire sur le tatouage et la femme tunisienne ainsi qu'un autre projet constituant un hommage visuel et intime à la perte, à la mémoire et aux rituels funéraires intitulé « Marhoumoun ».
              </p>
              <p>
                En 2024, elle co-crée « HAWMA » à Tunis avec l'initiative créative et culturelle « Sens of Art ».
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}