'use client'

import { useState } from 'react'
import Image from 'next/image'

// Project Data
const lienSacreProject = {
  id: 'lien-sacre',
  title: 'Lien sacré',
  description: `Je vous invite à plonger dans une autre dimension, celle de nos mariages en Algérie, où chaque instant est une véritable symphonie d'émotions, de traditions et de couleurs. Ici, la présence des femmes s’impose naturellement, du début à la fin des festivités.
Dès les premiers préparatifs, ce sont elles qui dirigent. Mères, tantes, sœurs et amies se réunissent pour veiller à chaque détail avec une minutie sans faille. Qu’il s’agisse du choix des tenues, des bijoux ou des plats à servir, tout passe entre leurs mains habiles. Leur savoir-faire et leur engagement transforment cette période en un moment de solidarité intense. Derrière chaque geste se cache la détermination de rendre ce mariage exceptionnel.
La mariée est au cœur de toutes les attentions, entourée de celles qui lui prodiguent conseils et soutien dans cette étape importante de sa vie. Quand elle quitte la maison familiale, l'émotion est palpable, marquée par des larmes et des sourires mêlés. Ce moment, empreint de traditions, est aussi une démonstration de l'unité et de l’affection qui lient les femmes autour de cet événement. Ce passage n’est pas seulement un adieu, c’est une étape de transmission où elles l’accompagnent vers un nouveau chapitre.
Tout au long des festivités, l’enthousiasme des femmes anime la célébration. Elles chantent, dansent, et célèbrent l’union avec une joie et une vitalité qui insufflent une énergie unique. Leur présence, bien plus qu’un simple ornement, est l’essence de ces rassemblements. Elles incarnent la continuité des traditions tout en apportant un vent de modernité et d’innovation. Les mariages algériens sont ainsi le reflet de cet équilibre délicat entre respect des coutumes et adaptation à une époque nouvelle.
Même face aux défis et tensions qui peuvent surgir durant les préparatifs, ce sont souvent elles qui trouvent les mots pour apaiser les esprits et faire de chaque obstacle une opportunité de renforcer les liens. Leur rôle ne se limite pas à la coordination ; elles apportent une sagesse et une sérénité indispensables.
Le mariage algérien, dans son essence, repose en grande partie sur leur engagement et leur soutien. Elles sont les gardiennes des traditions, les architectes de cette célébration, assurant que l’union des deux êtres soit magnifiée à chaque étape. Peu importe le nombre d’invités ou les imprévus, leur contribution fait de chaque mariage un moment unique et inoubliable.
Je vous invite donc à découvrir l’univers de nos mariages algériens, où l’amour et la complicité féminine se tissent pour créer des souvenirs précieux. Venez vivre ces instants de bonheur où se mêlent tradition, émotion et modernité, portés par la grâce et l’engagement des femmes.


`,
  images: Array.from({ length: 21 }, (_, i) => `/liensacre/${i + 1}.jpg`),
}

const marhoumounProject = {
  id: 'marhoumoun',
  title: 'مرحومون / Marhoumoun',
  description: `
La mort n’a pas de sens.

Quand le téléphone sonne et qu'on entend « Allah akbar » ou un hurlement, une larme silencieuse qui tombe et un « Inna lillah wa inna ilayhi raji'oun », cet appel n'est que le premier pour annoncer un décès. Il faut ensuite l’annoncer au reste de la maison en restant courageux et fort, puisque ce n’est pas le moment de craquer.
Je me rappelle du décès de mon grand-père. Je n'étais qu'une petite fille, je ne sais pas qui avait appelé. Je suis descendue par les escaliers, j'ai ouvert la porte et là, je vois notre voisine qui m’a retenue et qui disait ne pas s'attendre à ce qu'une gamine puisse avoir autant de force. C’était le premier décès d’un proche que j’ai vécu.
Avec le temps, on comprend que c’est juste une autre étape de la vie, qu'on va tous y passer un jour et être dans les deux camps : el motaazi et el moaazi. Et puis un jour, on sera el marhoum / el marhouma.
La mort ne frappe jamais à la porte pour nous prévenir. Dans ce projet, je retrace les trois jours qui suivent un décès en Oranie. Les membres de la famille mettent leur chagrin de côté pour accueillir, nourrir, prendre soin des invités. À chaque enterrement, le même scénario se répète. Et à chaque fois, je me surprends à espérer qu’un jour, nous pourrons pleurer. Pleurer librement.
Ici, les vivants prennent le dessus, masquant la douleur derrière les gestes, les plats servis, les formules échangées. Le mort, lui, est en paix. Ce qui reste à porter, c’est la charge des vivants.
Le son que vous entendez est composé d’enregistrements réalisés durant les funérailles.
« On meurt tous plusieurs fois dans une vie. »

`,
  vimeoUrl: 'https://player.vimeo.com/video/1223166918?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0', 
  audioUrl: '/marhoumoun/audio.mp3',
  images: Array.from({ length: 57 }, (_, i) => `/marhoumoun/${i + 1}.jpeg`),
}

const projectsData: Record<string, typeof lienSacreProject[]> = {
  photography: [marhoumounProject, lienSacreProject],
  videography: [marhoumounProject, lienSacreProject],
  audiography: [marhoumounProject],
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [showContact, setShowContact] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const [carouselIndex, setCarouselIndex] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  const handleSelectProject = (project: any) => {
    setSelectedProject(project)
    setShowContact(false)
    setCarouselIndex(0)
    setActiveMenu(null)
  }

  const prevSlide = () => {
    if (!selectedProject?.images) return
    setCarouselIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    if (!selectedProject?.images) return
    setCarouselIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-[#e2e1dd] text-zinc-900'
      }`}
    >
      {/* Container principal */}
      <div className="px-4 sm:px-8 md:px-16 py-6 max-w-4xl mx-auto">
        
        {/* Navigation & Switch Theme */}
        <header className="mb-10 relative z-30 space-y-6">
          {/* Toggle Theme - Repositionné pour mobile */}
          <div className="flex justify-end">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border transition-all ${
                darkMode
                  ? 'border-zinc-800 text-zinc-400 bg-zinc-900/80'
                  : 'border-zinc-300 text-zinc-600 bg-[#e2e1dd]/80'
              }`}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[11px] uppercase tracking-[0.25em] font-extralight">
            <button
              onClick={() => {
                setSelectedProject(null)
                setShowContact(false)
                setActiveMenu(null)
              }}
              className="hover:opacity-50 transition"
            >
              Biographie
            </button>

            {['photography', 'videography', 'audiography'].map((category) => (
              <div key={category} className="relative group py-1">
                <button
                  onClick={() => toggleMenu(category)}
                  className="cursor-pointer hover:opacity-50 transition uppercase"
                >
                  {category} {activeMenu === category ? '▴' : '▾'}
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 text-center z-50 ${
                    activeMenu === category ? 'block' : 'hidden group-hover:block'
                  }`}
                >
                  <div
                    className={`p-4 border shadow-2xl space-y-2 backdrop-blur-xl rounded-sm ${
                      darkMode ? 'bg-zinc-900/95 border-zinc-800' : 'bg-[#e2e1dd]/95 border-zinc-300'
                    }`}
                  >
                    {projectsData[category]?.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => handleSelectProject(project)}
                        className="block w-full text-[11px] text-left opacity-70 hover:opacity-100 py-1"
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => {
                setSelectedProject(null)
                setShowContact(true)
                setActiveMenu(null)
              }}
              className="hover:opacity-50 transition"
            >
              Contact
            </button>
          </nav>
        </header>

        <main className="max-w-2xl mx-auto space-y-8 relative z-10">
          {/* VUE CONTACT */}
          {showContact ? (
            <section className="space-y-6 animate-fadeIn">
              <h1 className="text-xl font-extralight tracking-wide border-b border-zinc-500/20 pb-3">
                Contact
              </h1>

              <div className="space-y-4 text-xs md:text-sm font-extralight opacity-80">
                <p>
                  Pour toute demande de collaboration, d'exposition ou d'information :
                </p>

                <div className="space-y-2 pt-2">
                  <p>
                    <strong className="font-normal uppercase tracking-wider text-[11px] block text-zinc-400">Email</strong>
                    <a
                      href="mailto:contact@wafaasoltane.com"
                      className="underline underline-offset-4 hover:opacity-70 transition"
                    >
                      contact@wafaasoltane.com
                    </a>
                  </p>

                  <p className="pt-2">
                    <strong className="font-normal uppercase tracking-wider text-[11px] block text-zinc-400">Instagram</strong>
                    <a
                      href="https://instagram.com/wafaasoltane"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-70 transition"
                    >
                      @wafaasoltane
                    </a>
                  </p>
                </div>

                <form
                  action="https://formspree.io/f/VOTRE_ID_FORMSPREE"
                  method="POST"
                  className="space-y-4 pt-6"
                >
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-1 opacity-60">Nom</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className={`w-full p-2.5 text-xs rounded border bg-transparent focus:outline-none transition ${
                        darkMode ? 'border-zinc-800 focus:border-zinc-500' : 'border-zinc-300 focus:border-zinc-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-1 opacity-60">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className={`w-full p-2.5 text-xs rounded border bg-transparent focus:outline-none transition ${
                        darkMode ? 'border-zinc-800 focus:border-zinc-500' : 'border-zinc-300 focus:border-zinc-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-1 opacity-60">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className={`w-full p-2.5 text-xs rounded border bg-transparent focus:outline-none transition ${
                        darkMode ? 'border-zinc-800 focus:border-zinc-500' : 'border-zinc-300 focus:border-zinc-600'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 rounded border transition-all ${
                      darkMode
                        ? 'border-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
                        : 'border-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
                    }`}
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </section>
          ) : selectedProject ? (
            /* VUE PROJET */
            <section className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-baseline border-b border-zinc-500/20 pb-3">
                <h1 className="text-xl font-extralight tracking-wide">{selectedProject.title}</h1>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100"
                >
                  [Fermer]
                </button>
              </div>

              {selectedProject.description && (
                <p className="text-xs md:text-sm leading-relaxed font-extralight opacity-85 whitespace-pre-line">
                  {selectedProject.description}
                </p>
              )}

              {/* Player Audio */}
              {selectedProject.audioUrl && (
                <div
                  className={`p-3 rounded-lg border space-y-1 ${
                    darkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-300 bg-zinc-200/40'
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                    🔊 Ambiance Sonore
                  </p>
                  <audio controls preload="metadata" className="w-full h-8 opacity-80 hover:opacity-100">
                    <source src={selectedProject.audioUrl} type="audio/mpeg" />
                  </audio>
                </div>
              )}

              {/* Player Vidéo Vimeo */}
              {selectedProject.vimeoUrl && (
                <div className="w-full rounded-lg overflow-hidden border border-zinc-500/10 shadow-lg bg-black">
                  <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                      src={selectedProject.vimeoUrl}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                      title={selectedProject.title}
                    />
                  </div>
                </div>
              )}

              {/* Carousel Optimsé */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="relative group overflow-hidden rounded-sm bg-black/20 h-[320px] sm:h-[450px] w-full flex items-center justify-center">
                    <Image
                      src={selectedProject.images[carouselIndex]}
                      alt={`${selectedProject.title} - ${carouselIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      quality={60}
                      priority
                      className="object-contain cursor-pointer"
                      onClick={() => setActiveImageIndex(carouselIndex)}
                    />

                    <button
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white w-8 h-8 rounded-full text-sm flex items-center justify-center transition z-10"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white w-8 h-8 rounded-full text-sm flex items-center justify-center transition z-10"
                    >
                      ›
                    </button>

                    <span className="absolute bottom-3 right-3 text-[9px] tracking-widest text-white/80 bg-black/60 px-2 py-1 backdrop-blur-sm rounded z-10">
                      {carouselIndex + 1} / {selectedProject.images.length}
                    </span>
                  </div>

                  {/* Navigation Miniatures */}
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {selectedProject.images.map((img: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`relative flex-shrink-0 w-12 h-12 rounded-sm overflow-hidden border transition-all ${
                          carouselIndex === idx
                            ? 'border-white opacity-100 scale-105'
                            : 'border-transparent opacity-40 hover:opacity-80'
                        }`}
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          sizes="48px"
                          quality={30}
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ) : (
            /* VUE BIOGRAPHIE */
            <section className="space-y-6">
              <h1 className="text-2xl font-extralight">Biographie</h1>
              <div className="text-xs md:text-sm leading-relaxed opacity-80 font-extralight space-y-4">
                <p>
                  <strong className="font-normal">WAFAA SOLTANE</strong>, née en 1994 à Oran, a étudié la littérature française à l'Université d'Oran avant de se tourner vers la photographie documentaire.
                </p>
                <p>
                  Son parcours artistique s'enrichit d'une formation auprès de la photographe Liasmine Fodil, suivie d'un mentorat approfondi avec Lola Khalfa dans le cadre de la première édition du projet Tilawin (2021-2022).
                </p>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Lightbox Zoom */}
      {activeImageIndex !== null && selectedProject?.images && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-white text-xs tracking-widest uppercase p-2"
          >
            ✕ Fermer
          </button>
          <div className="relative w-full h-[85vh]">
            <Image
              src={selectedProject.images[activeImageIndex]}
              alt="Zoom"
              fill
              quality={85}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}