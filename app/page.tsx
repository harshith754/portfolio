export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f4f0e8]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-[#c8a96a]">
          <span>Harshith Kunder</span>
          <span>Portfolio</span>
        </header>

        <div className="max-w-3xl py-24">
          <p className="mb-5 text-sm uppercase tracking-[0.24em] text-[#62c7d9]">
            Interactive systems, motion, and web craft
          </p>
          <h1 className="text-5xl font-semibold leading-none tracking-tight text-balance sm:text-7xl lg:text-8xl">
            Building the kinetic web.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#cfc7b8]">
            A new portfolio is taking shape here, starting with a physics-driven
            animation playground for water, metal, gravity, and sound.
          </p>
        </div>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-[#8f887c] sm:flex-row sm:items-center sm:justify-between">
          <span>Next.js foundation ready.</span>
          <span>Simulator build coming next.</span>
        </footer>
      </section>
    </main>
  );
}
