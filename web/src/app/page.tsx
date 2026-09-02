'use client'

import { useState, useEffect } from 'react'

// 1. PROJET : LIEN SACRÉ
const lienSacreProject = {
  id: 'lien-sacre',
  title: 'Lien sacré',
  description: `Je vous invite à plonger dans une autre dimension, celle de nos mariages en Algérie, où chaque instant est une véritable symphonie d'émotions, de traditions et de couleurs. Ici, la présence des femmes s’impose naturally, du début à la fin des festivités.

Dès les premiers préparatifs, ce sont elles qui dirigent. Mères, tantes, sœurs et amies se réunissent pour veiller à chaque détail avec une minutie sans faille. Qu’il s’agisse du choix des tenues, des bijoux ou des plats à servir, tout passe entre leurs mains habiles. Leur savoir-faire et leur engagement transforment cette période en un moment de solidarité intense. Derrière chaque geste se cache la détermination de rendre ce mariage exceptionnel.

La mariée est au cœur de toutes les attentions, entourée de celles qui lui prodiguent conseils et soutien dans cette étape importante de sa vie. Quand elle quitte la maison familiale, l'émotion est palpable, marquée par des larmes et des sourires mêlés. Ce moment, empreint de traditions, est aussi une démonstration de l'unité et de l’affection qui lient les femmes autour de cet événement. Ce passage n’est pas seulement un adieu, c’est une étape de transmission où elles l’accompagnent vers un nouveau chapitre.

Tout au long des festivités, l’enthousiasme des femmes anime la célébration. Elles chantent, dansent, et célèbrent l’union avec une joie et une vitalité qui insufflent une énergie unique. Leur présence, bien plus qu’un simple ornement, est l’essence de ces rassemblements. Elles incarnent la continuité des traditions tout en apportant un vent de modernité et d’innovation. Les mariages algériens sont ainsi le reflet de cet équilibre délicat entre respect des coutumes et adaptation à une époque nouvelle.

Même face aux défis et tensions qui peuvent surgir durant les préparatifs, ce sont souvent elles qui trouvent les mots pour apaiser les esprits et faire de chaque obstacle une opportunité de renforcer les liens. Leur rôle ne se limite pas à la coordination ; elles apportent une sagesse et une sérénité indispensables.

Le mariage algérien, dans son essence, repose en grande partie sur leur engagement et leur soutien. Elles sont les gardiennes des traditions, les architectes de cette célébration, assurant que l’union des deux êtres soit magnifiée à chaque étape. Peu importe le nombre d’invités ou les imprévus, leur contribution fait de chaque mariage un moment unique et inoubliable.

Je vous invite donc à découvrir l’univers de nos mariages algériens, où l’amour et la complicité féminine se tissent pour créer des souvenirs précieux. Venez vivre ces instants de bonheur où se mêlent tradition, émotion et modernité, portés par la grâce et l’engagement des femmes.`,
  images: Array.from({ length: 21 }, (_, i) => `/liensacre/${i + 1}.jpg`),
}

// 2. PROJET : MARHOUMOUN
const marhoumounProject = {
  id: 'marhoumoun',
  title: 'مرحومون / Marhoumoun',
  description: `La mort n’a pas de sens.

Quand le téléphone sonne et qu'on entend « Allah akbar » ou un hurlement, une larme silencieuse qui tombe et un « Inna lillah wa inna ilayhi raji'oun », cet appel n'est que le premier pour annoncer un décès. Il faut ensuite l’annoncer au reste de la maison en restant courageux et fort, puisque ce n’est pas le moment de craquer.

Je me rappelle du décès de mon grand-père. Je n'étais qu'une petite fille, je ne sais pas qui avait appelé. Je suis descendue par les escaliers, j'ai ouvert la porte et là, je vois notre voisine qui m’a retenue et qui disait ne pas s'attendre à ce qu'une gamine puisse avoir autant de force. C’était le premier décès d’un proche que j’ai vécu.

Avec le temps, on comprend que c’est juste une autre étape de la vie, qu'on va tous y passer un jour et être dans les deux camps : el motaazi et el moaazi. Et puis un jour, on sera el marhoum / el marhouma.

La mort ne frappe jamais à la porte pour nous prévenir. Dans ce projet, je retrace les trois jours qui suivent un décès en Oranie. Les membres de la famille mettent leur chagrin de côté pour accueillir, nourrir, prendre soin des invités. À chaque enterrement, le même scénario se répète. Et à chaque fois, je me surprends à espérer qu’un jour, nous pourrons pleurer. Pleurer librement.

Ici, les vivants prennent le dessus, masquant la douleur derrière les gestes, les plats servis, les formules échangées. Le mort, lui, est en paix. Ce qui reste à porter, c’est la charge des vivants.

Le son que vous entendez est composé d’enregistrements réalisés durant les funérailles.

« On meurt tous plusieurs fois dans une vie. »`,
  vimeoUrl: 'https://player.vimeo.com/video/1223166918?badge=0&autopause=0&player_id=0&app_id=58479',
  audioUrl: '/marhoumoun/audio.mp3',
  images: Array.from({ length: 57 }, (_, i) => `/marhoumoun/${i + 1}.jpeg`),
}

const projectsData = {
  photography: [lienSacreProject, marhoumounProject],
  videography: [lienSacreProject, marhoumounProject],
  audiography: [marhoumounProject],
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [darkMode, setDarkMode] = useState(true)

  // Gestion du menu actif pour clics/taps
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  // Gestion du Zoom / Lightbox
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  const handleSelectProject = (project: any) => {
    setSelectedProject(project)
    setActiveMenu(null)
  }

  // Raccourcis clavier pour la lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null || !selectedProject?.images) return
      if (e.key === 'Escape') setActiveImageIndex(null)
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % selectedProject.images.length : null
        )
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + selectedProject.images.length) % selectedProject.images.length
            : null
        )
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImageIndex, selectedProject])

  return (
    <div
      className={`min-h-screen transition-colors duration-700 font-sans selection:bg-zinc-500 selection:text-white ${
        darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-[#e2e1dd] text-zinc-900'
      }`}
    >
      {/* Bouton Dark / Light Mode */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 shadow-sm ${
            darkMode
              ? 'border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white bg-zinc-900/80 backdrop-blur-md'
              : 'border-zinc-300 hover:border-zinc-800 text-zinc-600 hover:text-black bg-[#e2e1dd]/80 backdrop-blur-md'
          }`}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <div className="px-6 md:px-20 py-12 max-w-5xl mx-auto">
        {/* Navigation principale */}
        <header className="mb-24 relative z-30">
          <nav className="flex flex-wrap justify-center gap-8 md:gap-14 text-[11px] md:text-xs tracking-[0.3em] uppercase font-extralight">
            <button
              onClick={() => {
                setSelectedProject(null)
                setActiveMenu(null)
              }}
              className="hover:opacity-50 transition-opacity duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300"
            >
              Biographie
            </button>

            {/* PHOTOGRAPHY */}
            <div className="relative group py-1">
              <button
                onClick={() => toggleMenu('photography')}
                className="cursor-pointer hover:opacity-50 transition-opacity duration-300 relative block uppercase tracking-[0.3em] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current group-hover:after:w-full after:transition-all after:duration-300"
              >
                Photography {activeMenu === 'photography' ? '▴' : '▾'}
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 text-center z-50 transition-all duration-200 ${
                  activeMenu === 'photography'
                    ? 'block opacity-100 pointer-events-auto'
                    : 'hidden group-hover:block opacity-100'
                }`}
              >
                <div
                  className={`p-5 border shadow-2xl space-y-3 backdrop-blur-xl rounded-sm ${
                    darkMode
                      ? 'bg-zinc-900/95 border-zinc-800'
                      : 'bg-[#e2e1dd]/95 border-zinc-300'
                  }`}
                >
                  {projectsData.photography.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleSelectProject(project)}
                      className="block w-full text-[11px] tracking-wider text-left font-light hover:translate-x-1 transition-transform duration-200 opacity-70 hover:opacity-100"
                    >
                      {project.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* VIDEOGRAPHY */}
            <div className="relative group py-1">
              <button
                onClick={() => toggleMenu('videography')}
                className="cursor-pointer hover:opacity-50 transition-opacity duration-300 relative block uppercase tracking-[0.3em] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current group-hover:after:w-full after:transition-all after:duration-300"
              >
                Videography {activeMenu === 'videography' ? '▴' : '▾'}
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 text-center z-50 transition-all duration-200 ${
                  activeMenu === 'videography'
                    ? 'block opacity-100 pointer-events-auto'
                    : 'hidden group-hover:block opacity-100'
                }`}
              >
                <div
                  className={`p-5 border shadow-2xl space-y-3 backdrop-blur-xl rounded-sm ${
                    darkMode
                      ? 'bg-zinc-900/95 border-zinc-800'
                      : 'bg-[#e2e1dd]/95 border-zinc-300'
                  }`}
                >
                  {projectsData.videography.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleSelectProject(project)}
                      className="block w-full text-[11px] tracking-wider text-left font-light hover:translate-x-1 transition-transform duration-200 opacity-70 hover:opacity-100"
                    >
                      {project.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* AUDIOGRAPHY */}
            <div className="relative group py-1">
              <button
                onClick={() => toggleMenu('audiography')}
                className="cursor-pointer hover:opacity-50 transition-opacity duration-300 relative block uppercase tracking-[0.3em] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current group-hover:after:w-full after:transition-all after:duration-300"
              >
                Audiography {activeMenu === 'audiography' ? '▴' : '▾'}
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 text-center z-50 transition-all duration-200 ${
                  activeMenu === 'audiography'
                    ? 'block opacity-100 pointer-events-auto'
                    : 'hidden group-hover:block opacity-100'
                }`}
              >
                <div
                  className={`p-5 border shadow-2xl space-y-3 backdrop-blur-xl rounded-sm ${
                    darkMode
                      ? 'bg-zinc-900/95 border-zinc-800'
                      : 'bg-[#e2e1dd]/95 border-zinc-300'
                  }`}
                >
                  {projectsData.audiography.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleSelectProject(project)}
                      className="block w-full text-[11px] tracking-wider text-left font-light hover:translate-x-1 transition-transform duration-200 opacity-70 hover:opacity-100"
                    >
                      {project.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setActiveMenu(null)}
              className="hover:opacity-50 transition-opacity duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Contenu de la page */}
        <main
          className="max-w-2xl mx-auto space-y-16 relative z-10"
          onClick={() => setActiveMenu(null)}
        >
          {selectedProject ? (
            <section className="space-y-12 animate-fadeIn">
              {/* Entête du Projet */}
              <div className="flex justify-between items-baseline border-b border-zinc-500/20 pb-4">
                <h1 className="text-2xl md:text-3xl font-extralight tracking-wide">
                  {selectedProject.title}
                </h1>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-[10px] tracking-[0.25em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-300"
                >
                  [fermer]
                </button>
              </div>

              {/* Description */}
              {selectedProject.description && (
                <div className="text-xs md:text-sm leading-relaxed font-extralight opacity-85 whitespace-pre-line space-y-4">
                  {selectedProject.description}
                </div>
              )}

              {/* Player Audio */}
              {selectedProject.audioUrl && (
                <div
                  className={`p-4 rounded-lg border transition-all duration-300 space-y-2 ${
                    darkMode
                      ? 'border-zinc-800 bg-zinc-900/50'
                      : 'border-zinc-300 bg-zinc-200/40'
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                    🔊 Ambiance Sonore
                  </p>
                  <audio controls className="w-full h-8 opacity-80 hover:opacity-100 transition">
                    <source src={selectedProject.audioUrl} type="audio/mpeg" />
                  </audio>
                </div>
              )}

              {/* Player Vidéo Vimeo Embed */}
              {selectedProject.vimeoUrl && (
                <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden border border-zinc-500/10 shadow-lg bg-black">
                  <iframe
                    src={selectedProject.vimeoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={selectedProject.title}
                  />
                </div>
              )}

              {/* Galerie d'images interactive */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-16 pt-6">
                  {selectedProject.images.map((imgUrl: string, idx: number) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className="group relative cursor-zoom-in overflow-hidden rounded-sm"
                    >
                      <img
                        src={imgUrl}
                        alt={`${selectedProject.title} - ${idx + 1}`}
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      <span className="absolute bottom-4 right-4 text-[9px] tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 px-2 py-1 backdrop-blur-sm rounded">
                        ZOOM [{idx + 1}/{selectedProject.images.length}]
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ) : (
            /* Vue Biographie */
            <section className="space-y-10 animate-fadeIn">
              <h1 className="text-3xl md:text-4xl font-extralight tracking-tight">
                Biographie
              </h1>

              <div className="text-xs md:text-sm leading-relaxed font-extralight opacity-80 space-y-6">
                <p>
                  <strong className="font-normal">WAFAA SOLTANE</strong>, née en 1994 à Oran, a étudié la littérature française à l'Université d'Oran avant de se tourner vers la photographie documentaire.
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
              </div>
            </section>
          )}
        </main>
      </div>

      {/* MODAL LIGHTBOX / ZOOM PLEIN ÉCRAN */}
      {activeImageIndex !== null && selectedProject?.images && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fadeIn">
          {/* Bouton Fermer */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-xs tracking-widest uppercase p-2 z-50 transition"
          >
            ✕ Fermer
          </button>

          {/* Navigation Flèche Gauche */}
          <button
            onClick={() =>
              setActiveImageIndex(
                (activeImageIndex - 1 + selectedProject.images.length) %
                  selectedProject.images.length
              )
            }
            className="absolute left-4 md:left-8 text-white/50 hover:text-white text-xl p-4 transition z-50"
          >
            ‹
          </button>

          {/* Image en haute résolution */}
          <div className="max-w-full max-h-full flex flex-col items-center justify-center space-y-3">
            <img
              src={selectedProject.images[activeImageIndex]}
              alt={`Zoom ${activeImageIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded-sm transition-all duration-300"
            />
            <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">
              {activeImageIndex + 1} / {selectedProject.images.length}
            </span>
          </div>

          {/* Navigation Flèche Droite */}
          <button
            onClick={() =>
              setActiveImageIndex(
                (activeImageIndex + 1) % selectedProject.images.length
              )
            }
            className="absolute right-4 md:right-8 text-white/50 hover:text-white text-xl p-4 transition z-50"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}