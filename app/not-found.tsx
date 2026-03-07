import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Andrew Ryno",
  description: "404 Not Found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-semibold tracking-tight">404</h1>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          Nothing here.
        </p>
        <div className="mt-8 flex gap-5">
          <a
            href="/"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}
