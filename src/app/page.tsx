"use client";

import { useState } from "react";

type Format = {
  format: string;
  price: string;
  source: string;
  url: string;
  note?: string;
};

type Anime = {
  title: string;
  year: string;
  type: string;
  description: string;
  formats: Format[];
};

const animeCollection: Anime[] = [
  {
    title: "Dallos",
    year: "1983",
    type: "OVA",
    description:
      "The first ever OVA. Set on the Moon, colonists rebel against Earth's control. A landmark release that sparked a revolution in anime distribution.",
    formats: [
      {
        format: "DVD",
        price: "$29.99–$60.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=dallos+anime+dvd",
        note: "Rare, Japanese import",
      },
      {
        format: "Blu-ray",
        price: "$39.99",
        source: "Amazon",
        url: "https://www.amazon.com/s?k=dallos+anime+blu-ray",
        note: "Discotek Media release",
      },
    ],
  },
  {
    title: "Angel's Egg",
    year: "1985",
    type: "OVA",
    description:
      "A hauntingly beautiful, dialogue-sparse masterpiece by Mamoru Oshii. A girl wanders a desolate world protecting an egg she believes will hatch into an angel.",
    formats: [
      {
        format: "4K UHD + Blu-ray",
        price: "$41.99–$59.99",
        source: "Amazon / DiabolikDVD",
        url: "https://www.amazon.com/Angels-Egg-All-Region-UHD-Blu-Ray/dp/B0FQK3KD8K",
        note: "Umbrella Entertainment, Region Free",
      },
      {
        format: "Blu-ray (Collector's)",
        price: "$100.00–$175.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=angels+egg+blu-ray",
        note: "With slipcover, limited edition",
      },
    ],
  },
  {
    title: "Cat Soup",
    year: "2001",
    type: "OVA",
    description:
      "A 35-minute experimental, dialogue-free surreal film following two cats on a journey through the land of the dead. One of the weirdest, most original anime ever made.",
    formats: [
      {
        format: "DVD",
        price: "$29.99",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=cat+soup+anime+dvd",
        note: "OOP, Rare",
      },
      {
        format: "DVD (Limited Edition)",
        price: "$30.00–$50.00",
        source: "eBay",
        url: "https://www.ebay.com/p/3430221",
        note: "Liquid Art Packaging, very rare",
      },
    ],
  },
  {
    title: "Golden Boy",
    year: "1995",
    type: "OVA",
    description:
      "A legendary comedy OVA with an iconic English dub. Each episode features a new job, a new girl, and absolute chaos. The OVA of OVAs.",
    formats: [
      {
        format: "Blu-ray",
        price: "$24.99–$34.99",
        source: "Amazon",
        url: "https://www.amazon.com/s?k=golden+boy+anime+blu-ray",
        note: "Discotek Media release",
      },
      {
        format: "DVD",
        price: "$15.00–$30.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=golden+boy+anime+dvd",
      },
      {
        format: "VHS",
        price: "$10.00–$25.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=golden+boy+anime+vhs",
        note: "ADV Films release, collector's item",
      },
    ],
  },
  {
    title: "Bubblegum Crisis",
    year: "1987",
    type: "OVA",
    description:
      "A slick cyberpunk OVA following an all-female squad of mercenaries fighting corrupt mega-corporations and rogue robots in a neo-lit Tokyo. Has the sickest opening 5 minutes in anime.",
    formats: [
      {
        format: "Blu-ray (Perfect Collection)",
        price: "$49.99",
        source: "Amazon / Crunchyroll Store",
        url: "https://www.amazon.com/Bubblegum-Crisis-Blu-ray-Katsuhito-Akiyama/dp/B0DJHGNXHM",
        note: "AnimEigo, 8 episodes, multi-language",
      },
      {
        format: "DVD",
        price: "$20.00–$40.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=bubblegum+crisis+dvd",
      },
      {
        format: "VHS",
        price: "$5.00–$20.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=bubblegum+crisis+vhs",
        note: "AnimEigo original release",
      },
    ],
  },
  {
    title: "Wicked City",
    year: "1987",
    type: "Film",
    description:
      "A sleazy, stylish supernatural noir about a demon hunter and a demon woman protecting a man who can restore the barrier between the human and demon worlds. Bold, violent, and unforgettable.",
    formats: [
      {
        format: "Blu-ray",
        price: "$19.99–$29.99",
        source: "Amazon",
        url: "https://www.amazon.com/Wicked-City-Blu-ray-Yusaku-Yara/dp/B08C4524TR",
        note: "Discotek Media, Region A",
      },
      {
        format: "DVD",
        price: "$15.00–$40.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=wicked+city+anime+dvd",
        note: "OOP Discotek with slipcover is rare",
      },
      {
        format: "VHS",
        price: "$10.00–$30.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=wicked+city+anime+vhs",
        note: "Manga Entertainment release",
      },
    ],
  },
  {
    title: "Gunsmith Cats",
    year: "1995",
    type: "OVA",
    description:
      "Rally and Minnie run a gun shop by day and are bounty hunters by night. An original side story from the manga with absolutely fire animation.",
    formats: [
      {
        format: "Blu-ray",
        price: "$22.99–$29.99",
        source: "Amazon",
        url: "https://www.amazon.com/s?k=gunsmith+cats+blu-ray",
        note: "Discotek Media release",
      },
      {
        format: "DVD",
        price: "$10.00–$25.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=gunsmith+cats+dvd",
      },
      {
        format: "VHS",
        price: "$5.00–$15.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=gunsmith+cats+vhs",
        note: "ADV Films release",
      },
    ],
  },
  {
    title: "Yokohama Kaidashi Kikou",
    year: "1998",
    type: "OVA",
    description:
      "A quiet, reflective series set after humanity's decline. A robot girl lives peacefully among the remnants of a fading world. The anime equivalent of sitting on a porch watching the sunset.",
    formats: [
      {
        format: "DVD (Set of 2)",
        price: "$100.00+",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=yokohama+kaidashi+kikou+dvd",
        note: "Region 2, Japanese only, very rare",
      },
      {
        format: "DVD (Single)",
        price: "$40.00–$80.00",
        source: "eBay",
        url: "https://www.ebay.com/itm/396165547649",
        note: "Japanese import, OVA",
      },
    ],
  },
  {
    title: "Vampire Hunter D",
    year: "1985",
    type: "Film",
    description:
      "The original film that introduced D, the stoic dhampir bounty hunter. A gothic horror classic that paved the way for its superior sequel.",
    formats: [
      {
        format: "Blu-ray",
        price: "$19.99–$24.99",
        source: "Amazon",
        url: "https://www.amazon.com/s?k=vampire+hunter+d+1985+blu-ray",
        note: "Sentai Filmworks release",
      },
      {
        format: "DVD",
        price: "$10.00–$20.00",
        source: "Amazon / eBay",
        url: "https://www.amazon.com/s?k=vampire+hunter+d+dvd",
      },
      {
        format: "VHS",
        price: "$5.00–$15.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=vampire+hunter+d+vhs",
        note: "Streamline Pictures release, classic",
      },
    ],
  },
  {
    title: "Vampire Hunter D: Bloodlust",
    year: "2000",
    type: "Film",
    description:
      "D races against rival bounty hunters to retrieve a girl taken by a vampire nobleman. Every frame is handcrafted. A farewell letter to an era of anime. The creator's favorite anime film.",
    formats: [
      {
        format: "Blu-ray",
        price: "$17.99–$24.99",
        source: "Amazon",
        url: "https://www.amazon.com/s?k=vampire+hunter+d+bloodlust+blu-ray",
        note: "Discotek Media / Sentai release",
      },
      {
        format: "DVD",
        price: "$10.00–$20.00",
        source: "Amazon / eBay",
        url: "https://www.amazon.com/s?k=vampire+hunter+d+bloodlust+dvd",
      },
      {
        format: "VHS",
        price: "$8.00–$25.00",
        source: "eBay",
        url: "https://www.ebay.com/sch/i.html?_nkw=vampire+hunter+d+bloodlust+vhs",
        note: "Urban Vision release",
      },
    ],
  },
];

function FormatBadge({ format }: { format: string }) {
  const colors: Record<string, string> = {
    VHS: "bg-amber-900/60 text-amber-300 border-amber-700",
    DVD: "bg-purple-900/60 text-purple-300 border-purple-700",
    "Blu-ray": "bg-blue-900/60 text-blue-300 border-blue-700",
    "4K UHD": "bg-emerald-900/60 text-emerald-300 border-emerald-700",
  };

  const key = Object.keys(colors).find((k) => format.includes(k)) || "DVD";
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-medium rounded border ${colors[key]}`}
    >
      {format}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${
        type === "OVA"
          ? "bg-pink-900/60 text-pink-300 border border-pink-700"
          : "bg-cyan-900/60 text-cyan-300 border border-cyan-700"
      }`}
    >
      {type}
    </span>
  );
}

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "OVA" | "Film">("all");

  const filtered =
    filter === "all"
      ? animeCollection
      : animeCollection.filter((a) => a.type === filter);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          The Lost Era of Anime
        </h1>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          DVD, VHS &amp; Blu-ray collection guide for classic OVAs and films
          from the era Japan literally cannot make anymore. Based on{" "}
          <a
            href="https://youtu.be/PBYD7uX-72U"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 underline"
          >
            &quot;The Lost Era of Anime We&apos;ll Never Get Back&quot;
          </a>{" "}
          by Bhan.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Prices are approximate and may vary. Links go to search results where
          you can find current listings.
        </p>
      </header>

      {/* Filter */}
      <div className="flex justify-center gap-2 mb-8">
        {(["all", "OVA", "Film"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-pink-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
            }`}
          >
            {f === "all" ? "All" : f}
          </button>
        ))}
      </div>

      {/* Table - Desktop */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-900/80 text-gray-400 text-left">
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Year</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Format</th>
              <th className="px-4 py-3 font-semibold">Price</th>
              <th className="px-4 py-3 font-semibold">Where to Buy</th>
              <th className="px-4 py-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((anime, i) =>
              anime.formats.map((fmt, j) => (
                <tr
                  key={`${i}-${j}`}
                  className={`border-t border-gray-800/60 hover:bg-gray-900/40 transition-colors ${
                    j === 0 ? "border-t-gray-700" : ""
                  }`}
                >
                  {j === 0 && (
                    <>
                      <td
                        className="px-4 py-3 font-semibold text-gray-100 align-top"
                        rowSpan={anime.formats.length}
                      >
                        {anime.title}
                        <p className="text-xs text-gray-500 font-normal mt-1 max-w-xs">
                          {anime.description}
                        </p>
                      </td>
                      <td
                        className="px-4 py-3 text-gray-300 align-top"
                        rowSpan={anime.formats.length}
                      >
                        {anime.year}
                      </td>
                      <td
                        className="px-4 py-3 align-top"
                        rowSpan={anime.formats.length}
                      >
                        <TypeBadge type={anime.type} />
                      </td>
                    </>
                  )}
                  <td className="px-4 py-3">
                    <FormatBadge format={fmt.format} />
                  </td>
                  <td className="px-4 py-3 text-green-400 font-mono text-xs">
                    {fmt.price}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={fmt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 underline text-xs"
                    >
                      {fmt.source}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500">
                    {fmt.note || "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Cards - Mobile */}
      <div className="md:hidden space-y-4">
        {filtered.map((anime, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === i ? null : i)
              }
              className="w-full text-left px-4 py-3 flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-100">
                    {anime.title}
                  </h3>
                  <TypeBadge type={anime.type} />
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{anime.year}</p>
              </div>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  expandedIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {expandedIndex === i && (
              <div className="px-4 pb-4 space-y-3">
                <p className="text-xs text-gray-400">{anime.description}</p>
                {anime.formats.map((fmt, j) => (
                  <div
                    key={j}
                    className="flex items-start justify-between gap-2 bg-gray-800/50 rounded-lg p-3"
                  >
                    <div className="space-y-1">
                      <FormatBadge format={fmt.format} />
                      <p className="text-green-400 font-mono text-sm">
                        {fmt.price}
                      </p>
                      {fmt.note && (
                        <p className="text-xs text-gray-500">{fmt.note}</p>
                      )}
                    </div>
                    <a
                      href={fmt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 text-xs underline shrink-0"
                    >
                      {fmt.source}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-gray-600 space-y-1">
        <p>
          Source:{" "}
          <a
            href="https://youtu.be/PBYD7uX-72U"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-400 underline"
          >
            &quot;The Lost Era of Anime We&apos;ll Never Get Back&quot; by Bhan
          </a>
        </p>
        <p>Prices last checked March 2026. All prices in USD.</p>
      </footer>
    </main>
  );
}
