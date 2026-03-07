const description =
  "Software engineer at ngrok, working on the Gateway team. Previously at Twilio and Levers.";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-semibold tracking-tight">Andrew Ryno</h1>
        <p className="mt-4 text-zinc-400 leading-relaxed">{description}</p>
        <div className="mt-8 flex gap-5">
          <a
            href="https://www.linkedin.com/in/andrewryno/"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/andrewryno"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
