"use client";

import Image from "next/image";

const teams = [
  { pos: 1, name: "Flamengos", logo: "/logos/flamengos.png", pl: 3, w: 2, d: 1, l: 0, gd: "+2", pts: 7 },
  { pos: 2, name: "Botafago", logo: "/logos/botafago.png", pl: 3, w: 2, d: 1, l: 0, gd: "+2", pts: 7 },
  { pos: 3, name: "Atlanta", logo: "/logos/atlanta.png", pl: 3, w: 2, d: 0, l: 1, gd: "+2", pts: 6 },
  { pos: 4, name: "Ajax", logo: "/logos/ajax.png", pl: 2, w: 2, d: 0, l: 0, gd: "+2", pts: 6 },
  { pos: 5, name: "Wolves", logo: "/logos/wolves.png", pl: 3, w: 1, d: 0, l: 2, gd: "-1", pts: 3 },
  { pos: 6, name: "Celtics", logo: "/logos/celtics.png", pl: 3, w: 1, d: 0, l: 2, gd: "-1", pts: 3 },
  { pos: 7, name: "Palmeras", logo: "/logos/palmeras.png", pl: 3, w: 0, d: 0, l: 1, gd: "-3", pts: 0 },
  { pos: 8, name: "Wrexham", logo: "/logos/wrexham.png", pl: 2, w: 0, d: 0, l: 2, gd: "-3", pts: 0 },
];

export default function FreshStandings() {
  return (
    <main className="min-h-screen bg-[#062e24] bg-[radial-gradient(circle_at_top_right,_#064e3b,_#062e24)] p-4 md:p-12 font-sans selection:bg-emerald-300">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">

          <div className="flex items-center gap-5">
            <div className="p-3 bg-white rounded-2xl shadow border border-emerald-200">
              <Image
                src="/logo.png"
                alt="MITS Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div>
              <h1 className="text-2xl md:text-4xl font-black tracking-tight text-emerald-100 uppercase">
                MITS <span className="text-emerald-400">Super League</span>
              </h1>

              <p className="text-emerald-300/70 font-bold tracking-[0.3em] text-[10px] uppercase">
                Official Point Table
              </p>
            </div>
          </div>

          <div className="hidden md:block px-6 py-2 bg-white/10 backdrop-blur rounded-full border border-emerald-400/20 text-emerald-200 font-bold text-sm shadow">
            Season 2026
          </div>

        </header>

        {/* Table */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">

          <table className="w-full text-left border-separate border-spacing-y-3 min-w-[800px]">

            {/* Table Head */}
            <thead>
              <tr className="text-[#d4af37] text-[18px] uppercase tracking-widest font-black">
                <th className="py-2 px-2">Rank</th>
                <th className="py-2 px-2">Club</th>
                <th className="py-2 px-2 text-center">PL</th>
                <th className="py-2 px-2 text-center">W</th>
                <th className="py-2 px-2 text-center">D</th>
                <th className="py-2 px-2 text-center">L</th>
                <th className="py-2 px-2 text-center">GD</th>
                <th className="py-2 px-8 text-right">Pts</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-sm">

              {teams.map((team) => (

                <tr
                  key={team.name}
                  className="group bg-white hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl"
                >

                  {/* Rank */}
                  <td className="py-4 px-2 rounded-l-2xl border border-emerald-100 border-r-0">
                    <span
                      className={`text-lg font-black ${
                        team.pos <= 3
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }`}
                    >
                      {team.pos}
                    </span>
                  </td>

                  {/* Club */}
                  <td className="py-4 px-3 border border-emerald-100 border-l-0 border-r-0">
                    <div className="flex items-center gap-4">

                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center p-1.5 border border-emerald-200 group-hover:scale-110 transition">
                        <Image
                          src={team.logo}
                          alt={team.name}
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>

                      <span className="font-bold text-emerald-950 uppercase tracking-tight">
                        {team.name}
                      </span>

                    </div>
                  </td>

                  {/* Stats */}
                  <td className="py-4 px-2 text-center font-semibold text-slate-600 border border-emerald-100 border-l-0 border-r-0">
                    {team.pl}
                  </td>

                  <td className="py-4 px-2 text-center font-semibold text-slate-600 border border-emerald-100 border-l-0 border-r-0">
                    {team.w}
                  </td>

                  <td className="py-4 px-2 text-center font-semibold text-slate-600 border border-emerald-100 border-l-0 border-r-0">
                    {team.d}
                  </td>

                  <td className="py-4 px-2 text-center font-semibold text-slate-600 border border-emerald-100 border-l-0 border-r-0">
                    {team.l}
                  </td>

                  {/* GD */}
                  <td className="py-4 px-2 text-center border border-emerald-100 border-l-0 border-r-0">
                    <span
                      className={`font-black ${
                        team.gd.includes("+")
                          ? "text-emerald-600"
                          : "text-rose-500"
                      }`}
                    >
                      {team.gd}
                    </span>
                  </td>

                  {/* Points */}
                  <td className="py-4 px-8 text-right rounded-r-2xl border border-emerald-100 border-l-0">

                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600 text-white font-black shadow-lg shadow-emerald-600/30 group-hover:scale-110 transition">
                      {team.pts}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <footer className="mt-12 flex items-center justify-between border-t border-emerald-400/20 pt-8">

          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-300" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>

          <p className="text-[10px] text-emerald-200/40 uppercase tracking-[0.4em] font-bold">
            © {new Date().getFullYear()} MITS Administration
          </p>

        </footer>

      </div>

    </main>
  );
}
