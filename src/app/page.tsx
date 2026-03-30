import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-serif text-[#1c1c1a] mb-4">
        Garments carry stories.
      </h1>
      <p className="text-lg text-[#1c1c1a]/60 max-w-md mb-12">
        PassItOn is a chain-of-custody system for the clothes we can't let go of.
      </p>

      <Link
        href="/garment/0001"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-full text-sm font-mono text-[#1c1c1a] hover:bg-white/80 hover:-translate-y-0.5 transition-all duration-300"
      >
        View Garment #0001
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="ml-1"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </main>
  );
}
