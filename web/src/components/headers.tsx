'use client'

import Link from 'next/link'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

// Tes projets centralisés
const projectsData = {
  photography: [
    {
      title: 'مرحومون / Marhoumoun',
      description: 'Description du projet Marhoumoun en photo...',
      images: ['/photos/marhoumoun1.jpg', '/photos/marhoumoun2.jpg'],
    },
    {
      title: 'La lumière des années noires',
      description: "Dans l'Algérie des années 90, la décennie noire, la violence semblait partout : dans les rues, dans les regards, jusque dans les silences. Pourtant, derrière les murs clos, dans les interstices de la peur, des femmes ont continué de vivre, de résister, de rêver. Elles ont porté, souvent seules, le poids des disparitions, des deuils, des incertitudes.\n\nLe début de cette série documentaire explore leurs voix, leurs luttes invisibles, leurs gestes du quotidien, en mêlant archives et récits intimes, pour rendre hommage à celles qui, dans la nuit de l'Histoire, ont maintenu la flamme de la vie.",
      images: ['/photos/annees-noires-1.jpg', '/photos/annees-noires-2.jpg'],
    },
    {
      title: 'Des souvenirs doux',
      description: 'Série photographique sur les mémoires et les textures douces.',
      images: ['/photos/souvenirs1.jpg'],
    },
    {
      title: 'Matbanch 3lik (Ça se voit pas sur toi)',
      description: 'Exploration visuelle autour des identités invisibles.',
      images: ['/photos/matbanch1.jpg'],
    },
  ],
  videography: [
    {
      title: 'Marhoumoun — Lien sacré',
      description: 'Court-métrage / essai vidéo sur le lien sacré.',
      videoUrl: '/videos/marhoumoun.mp4',
    },
    {
      title: 'La lumière des années noires',
      description: "Documentaire vidéo explorant les voix et luttes invisibles des femmes durant la décennie noire.",
      videoUrl: '/videos/annees-noires.mp4',
    },
    {
      title: 'Acte manqué',
      description: 'Projet vidéo d’art visuel.',
      videoUrl: '/videos/acte-manque.mp4',
    },
  ],
  audiography: [
    {
      title: 'مرحومون / Marhoumoun',
      description: 'Création sonore et paysages acoustiques.',
      audioUrl: '/audio/marhoumoun.mp3',
    },
  ],
}

export default function Header() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  return (
    <>
      <header className="flex w-full pt-10 pb-1 font-sans">
        <nav id="nav" role="navigation" className="w-full">
          <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
            <div className="mr-4 md:mr-8">
              <Link href="/" className="text-2xl font-bold tracking-wide uppercase">
                WAFAA SOLTANE
              </Link>
            </div>

            <div id="menu" className="w-full transition-all ease-out duration-500 md:w-auto md:flex-grow md:flex md:items-center">
              <ul id="ulMenu" className="flex flex-col duration-300 ease-out md:space-x-8 mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
                
                {/* PHOTOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <Link href="/" className="text-xl font-normal tracking-wide uppercase">
                    PHOTOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[260px] py-2 z-50 rounded-sm">
                    {projectsData.photography.map((project, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="w-full text-left block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-normal text-zinc-800 dark:text-zinc-200 transition duration-150"
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </li>

                {/* VIDEOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <Link href="/videos" className="text-xl font-normal tracking-wide uppercase">
                    VIDEOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[260px] py-2 z-50 rounded-sm">
                    {projectsData.videography.map((project, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="w-full text-left block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-normal text-zinc-800 dark:text-zinc-200 transition duration-150"
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </li>

                {/* AUDIOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <Link href="/audiography" className="text-xl font-normal tracking-wide uppercase">
                    AUDIOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[260px] py-2 z-50 rounded-sm">
                    {projectsData.audiography.map((project, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="w-full text-left block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-normal text-zinc-800 dark:text-zinc-200 transition duration-150"
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </li>

                {/* ABOUT ME */}
                <li className="group transition duration-300 py-2">
                  <Link href="/about" className="text-xl font-normal tracking-wide uppercase">
                    ABOUT ME
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>

                {/* CONTACT */}
                <li className="group transition duration-300 py-2">
                  <Link href="/contact" className="text-xl font-normal tracking-wide uppercase">
                    CONTACT
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Rendu de la Modal lorsqu'un projet est sélectionné */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}