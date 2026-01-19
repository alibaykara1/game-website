import Link from "next/link";
import { GAMES } from "@/lib/games";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient/Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-pink-900/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-gradient">Godot</span> Web Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the next generation of web-exported Godot games. High performance, immersive, and built for the browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#games" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105">
              Play Games
            </Link>
            <a href="https://godotengine.org" target="_blank" className="px-8 py-4 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Learn Godot
            </a>
          </div>
        </div>
      </section>

      {/* Game Grid Section */}
      <section id="games" className="py-20 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">Available Games</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAMES.map((game) => (
            <Link href={`/play/${game.id}`} key={game.id} className="group">
              <div className="h-full glass-panel rounded-2xl overflow-hidden hover:border-[var(--primary)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--primary-glow)]">
                <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
                  {game.thumbnail ? (
                    <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="text-6xl">🎮</div>
                  )}

                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                      ▶
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{game.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{game.description}</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <span>Released: {game.dateAdded}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
