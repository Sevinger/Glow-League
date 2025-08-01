import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CalendarIcon, TrophyIcon, UsersIcon, ClockIcon, LinkIcon } from "lucide-react";

export default function GlowLeagueHome() {
  const races = [
    { track: "Singapur", p1: "Náhlovský", p2: "Svat", p3: "Loudil" },
    { track: "Itálie (Imola)", p1: "Zahálka", p2: "Loudil", p3: "Nik" },
    { track: "Belgie", p1: "Zahálka", p2: "Svat", p3: "Náhlovský" },
    { track: "Baku", p1: "Zahálka", p2: "Loudil", p3: "Borko" },
    { track: "Japonsko", p1: "Korkobec", p2: "Drost", p3: "Turek" },
    { track: "Maďarsko", p1: "Svat", p2: "Borko", p3: "Zahálka" },
    { track: "Británie", p1: "Loudil", p2: "Zahálka", p3: "Neubauer" },
    { track: "Portugalsko", p1: "Svat", p2: "Zahálka", p3: "Borko" },
    { track: "Las Vegas", p1: "Zahálka", p2: "Kubel", p3: "Svat" },
    { track: "Abu Dhabi", p1: "Borko", p2: "Ondřejka", p3: "Kubel" },
  ];

  const standings = [
    { name: "Zahálka", team: "Red Bull", points: 211 },
    { name: "Loudil", team: "Mercedes", points: 148 },
    { name: "Svat", team: "Ferrari", points: 145 },
    { name: "Borko", team: "Red Bull", points: 122 },
    { name: "Neubauer", team: "Red Bull", points: 89 },
    { name: "Drozd", team: "Alpine", points: 69 },
    { name: "Vaňko", team: "Mercedes", points: 68 },
    { name: "Korkobec", team: "Aston Martin", points: 62 },
    { name: "Náhlovský", team: "Mercedes", points: 60 },
    { name: "Beran", team: "Red Bull", points: 57 },
    { name: "Košek", team: "McLaren", points: 57 },
    { name: "Čermák", team: "Alpine", points: 53 },
    { name: "Nic", team: "Aston Martin", points: 52 },
    { name: "Valášek", team: "Ferrari", points: 47 },
    { name: "Jirčík", team: "Haas", points: 42 },
    { name: "Jarschel", team: "Stake F1", points: 36 },
    { name: "Petřík", team: "McLaren", points: 34 },
    { name: "Ondrejka", team: "RD", points: 33 },
    { name: "Kubel", team: "RD", points: 25 },
    { name: "Stašík", team: "Williams", points: 25 },
  ];

  const champions = [
    { season: "S1", driver: "Daniel Borko", team: "Mercedes" },
    { season: "S2", driver: "Daniel Borko", team: "Mercedes" },
    { season: "S3", driver: "Daniel Borko", team: "Red Bull" },
    { season: "S4", driver: "Ondřej Zahálka", team: "Red Bull" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <header className="text-center mb-10">
        <img src="/formule_neon.png" alt="Glow League Logo" className="mx-auto w-48 mb-4" />
        <h1 className="text-4xl font-bold">Glow League Racing</h1>
        <p className="text-lg text-gray-300 mt-2">Virtuální F1 esport liga založená v roce 2024. Soutěžíme v simulovaných Grand Prix závodech.</p>
        <a href="https://discord.gg/f9ucGtfc" target="_blank" rel="noopener noreferrer">
          <Button className="mt-4">Připoj se na Discord</Button>
        </a>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><CalendarIcon className="w-5 h-5" /> Kalendář závodů</h2>
        <p className="text-gray-400 mt-2">Brzy doplníme oficiální termíny závodů pro následující sezónu.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><TrophyIcon className="w-5 h-5" /> Výsledky posledních závodů</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {races.map((race, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{race.track}</h3>
                <p>🥇 {race.p1}</p>
                <p>🥈 {race.p2}</p>
                <p>🥉 {race.p3}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><UsersIcon className="w-5 h-5" /> Statistiky jezdců</h2>
        <div className="overflow-auto mt-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">#</th>
                <th className="p-2">Jezdec</th>
                <th className="p-2">Tým</th>
                <th className="p-2">Body</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((driver, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="p-2">{idx + 1}.</td>
                  <td className="p-2">{driver.name}</td>
                  <td className="p-2">{driver.team}</td>
                  <td className="p-2">{driver.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><UsersIcon className="w-5 h-5" /> Týmy a sestavy</h2>
        <p className="text-gray-400 mt-2">Týmy a sestavy budou oznámeny před začátkem následující sezóny.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><ClockIcon className="w-5 h-5" /> Historie ligy</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Šampioni podle sezóny</h3>
          <ul className="list-disc list-inside text-gray-300">
            {champions.map((c, idx) => (
              <li key={idx}>{c.season}: {c.driver} ({c.team})</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-2">První závod ligy</h3>
          <p className="text-gray-300">1. 9. 2024 – Bahrajn<br />Vítěz: Jakub Mahr<br />Top 3: (zatím nezveřejněno)</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><LinkIcon className="w-5 h-5" /> Kontakt / Přihlášky</h2>
        <p className="text-gray-300">Připoj se k naší komunitě na Discordu a staň se součástí Glow League Racing.</p>
        <a href="https://discord.gg/f9ucGtfc" target="_blank" rel="noopener noreferrer">
          <Button className="mt-4">Discord server</Button>
        </a>
      </section>
    </div>
  );
}
