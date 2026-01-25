import Image from "next/image";
import { getClubs } from "./actions/club";

// Always fresh data (no cache)
export const dynamic = "force-dynamic";

export default async function FreshStandings() {
  // Fetch from DB (SERVER SIDE)
  const clubs = await getClubs();

  // Convert DB data → UI format
  const teams = clubs.map((club, index) => ({
    pos: index + 1,
    name: club.clubName,
    logo:  club.logoUrl,
    pl: club.played,
    w: club.won,
    d: club.draw,
    l: club.lost,
    gd:
      club.goal_diff > 0
        ? `+${club.goal_diff}`
        : `${club.goal_diff}`,
    pts: club.points,
  }));

  return (
    <main className="min-h-screen bg-[#062e24] bg-[radial-gradient(circle_at_top_right,_#064e3b,_#062e24)] p-4 md:p-12 font-sans selection:bg-emerald-300">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">

          <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="MITS Logo"
                width={150}
                height={150}
              />

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
        <div className="overflow-x-auto pb-4">

          <table className="w-full text-left border-separate border-spacing-y-3 min-w-[800px] ">

            <thead>
              <tr className="text-[#d4af37] text-[18px] uppercase tracking-widest font-black">
                <th className="text-center">Rank</th>
                <th>Club</th>
                <th className="text-center">PL</th>
                <th className="text-center">W</th>
                <th className="text-center">D</th>
                <th className="text-center">L</th>
                <th className="text-center">GD</th>
                <th className="text-center font-bold text-pink-400">Pts</th>
              </tr>
            </thead>

            <tbody className="text-sm rounded-2xl ">

              {teams.map((team) => (

                <tr
                  key={team.name}
                  className="group bg-white shadow-md hover:shadow-xl "
                >

                  {/* Rank */}
                  <td className="py-4 px-2 rounded-l-2xl border text-center">
                    <span
                      className={`text-lg font-black ${
                        team.pos <= 4
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }`}
                    >
                      {team.pos}
                    </span>
                  </td>

                  {/* Club */}
                  <td className="py-4 px-3 border">
                    <div className="flex items-center gap-4">

                      <div className="w-15 h-15 rounded-full flex justify-center items-center">

                      
                          <Image
                          src={team.logo}
                          alt={team.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>

                      <span className="font-bold text-emerald-950 uppercase">
                        {team.name}
                      </span>

                    </div>
                  </td>

                  {/* Stats */}
                  <td className="py-4 px-2 text-center text-xl  text-black font-semibold">{team.pl}</td>
                  <td className="py-4 px-2 text-center text-xl  text-black font-semibold">{team.w}</td>
                  <td className="py-4 px-2 text-center text-xl  text-black font-semibold">{team.d}</td>
                  <td className="py-4 px-2 text-center text-xl  text-black font-semibold">{team.l}</td>

                  {/* GD */}
                  <td className="py-4 px-2 text-center">
                    <span
                      className={`font-black text-xl font-semibold ${
                        team.gd.startsWith("+")
                          ? "text-emerald-600"
                          : "text-rose-500"
                      }`}
                    >
                      {team.gd}
                    </span>
                  </td>

                  {/* Points */}
                  <td className="py-4 px-3 text-center rounded-r-2xl border">

                    <span className="items-center justify-center rounded-xl text-xl text-green-500 w-full   text-black  font-black">
                      {team.pts}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <footer className="mt-12 flex justify-between border-t pt-8">

          <div className="flex gap-2">
            <div className="w-15 h-15 rounded-full flex justify-center items-center" >
              <Image src={'/sc.png'} width={40} height={40} alt="student council"/>
            </div>
            <div className="w-15 h-15 rounded-full flex justify-center items-center" >
                            <Image src={'/433.png'} width={60} height={60} alt="433"/>

            </div>
            <div className="w-15 h-15 rounded-full flex justify-center items-center" >
                            <Image src={'/logo.png'} width={60} height={60} alt="msl"/>

            </div>
          </div>

          <p className="text-[10px] text-emerald-200/40 uppercase tracking-[0.4em] font-bold">
            © {new Date().getFullYear()} MSL
          </p>

        </footer>

      </div>

    </main>
  );
}
