export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between text-sm uppercase tracking-[0.18em]">
          <span>Harshith Kunder</span>
          <span>Portfolio</span>
        </header>

        <div className="max-w-3xl py-24">
          <p className="mb-5 inline-flex bg-secondary px-3 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-secondary-foreground">
            Interactive systems, motion, and web craft
          </p>
          <h1 className="text-5xl font-semibold leading-none tracking-tight text-balance sm:text-7xl lg:text-8xl">
            Building the kinetic web.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            A new portfolio is taking shape here, starting with a physics-driven
            animation playground for water, metal, gravity, and sound.
          </p>
          <a
            className="mt-10 inline-flex bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground"
            href="mailto:kunderharshith3@gmail.com"
          >
            Contact
          </a>
        </div>

        <footer className="flex flex-col gap-3 border-t border-foreground pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span>Next.js foundation ready.</span>
          <span>Simulator build coming next.</span>
        </footer>
      </section>
    </main>
  );
}
