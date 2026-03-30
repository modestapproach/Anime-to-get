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
        format: "Blu-ray",
        price: "$24.99–$34.99",
        source: "Amazon",
        url: "https://www.amazon.com/Mamoru-Oshiis-Dallos-OVA-Blu-ray/dp/B0DCHB6T4R",
        note: "Discotek Media 2024 HD remaster, Region A",
      },
      {
        format: "DVD",
        price: "$99.99",
        source: "eBay",
        url: "https://www.ebay.com/p/27046022346",
        note: "Eastern Star release, OOP, rare",
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
        price: "$41.99",
        source: "DiabolikDVD",
        url: "https://diabolikdvd.com/product/4k-umbrella-angels-egg-umbrella-slipcover-4k-uhd-blu-ray-all-region/",
        note: "Umbrella Entertainment 2025, Region Free, 48-page booklet",
      },
      {
        format: "4K UHD + Blu-ray",
        price: "$59.99",
        source: "Amazon",
        url: "https://www.amazon.com/Angels-Egg-All-Region-UHD-Blu-Ray/dp/B0FQK3KD8K",
        note: "Umbrella Entertainment, All-Region",
      },
      {
        format: "Blu-ray (Budget)",
        price: "$8.99",
        source: "SloppySecondSales",
        url: "https://sloppysecondsales.com/index.php/product/angels-egg-1985-region-free-bluray-english-subtitles-mamoru-oshii-amano/",
        note: "Region-free, budget option",
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
        url: "https://www.ebay.com/p/3425350",
        note: "OOP, new condition, + $8.75 shipping",
      },
      {
        format: "DVD (Limited Edition)",
        price: "$30.00+",
        source: "eBay",
        url: "https://www.ebay.com/p/3430221",
        note: "Liquid Art Packaging, limited to 10,000 copies",
      },
      {
        format: "DVD",
        price: "Varies",
        source: "Amazon",
        url: "https://www.amazon.com/Cat-Soup-Masaru-Takase/dp/B0000ACP44",
        note: "Third-party sellers only, no Blu-ray exists",
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
        price: "$27.99",
        source: "Amazon",
        url: "https://www.amazon.com/Golden-Boy-Blu-ray-Doug-Smith/dp/B0FMJH7ZLH",
        note: "2025 release, 6 episodes, English dub + Japanese w/ subs",
      },
      {
        format: "DVD (Essential Collection)",
        price: "Varies (OOP)",
        source: "Amazon",
        url: "https://www.amazon.com/Golden-Boy-Essential-Anime-Collection/dp/B0001US5XI",
        note: "Out of print, third-party sellers only",
      },
      {
        format: "DVD",
        price: "Varies",
        source: "eBay",
        url: "https://www.ebay.com/p/26046040397",
        note: "Complete collection, OOP",
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
        source: "Amazon",
        url: "https://www.amazon.com/Bubblegum-Crisis-Blu-ray-Katsuhito-Akiyama/dp/B0DJHGNXHM",
        note: "AnimEigo 2025, all 8 OVAs, multi-language dubs",
      },
      {
        format: "Blu-ray (High-Def Disctopia)",
        price: "Varies",
        source: "Amazon",
        url: "https://www.amazon.com/Bubblegum-Crisis-High-definition-Disctopia-Blu-ray/dp/B07D3JT8V2",
        note: "2018 AnimEigo release, all 8 OVAs on 1 disc",
      },
      {
        format: "DVD / Blu-ray (various)",
        price: "$15.00–$50.00+",
        source: "eBay",
        url: "https://www.ebay.com/p/19046037138",
        note: "Multiple editions, new and used",
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
        price: "$21.99–$31.95",
        source: "eBay",
        url: "https://www.ebay.com/p/20051093702",
        note: "Discotek Media, Region A, US + UK English dubs",
      },
      {
        format: "Blu-ray",
        price: "Check listing",
        source: "Amazon",
        url: "https://www.amazon.com/Wicked-City-Blu-ray-Yusaku-Yara/dp/B08C4524TR",
        note: "Discotek Media release",
      },
      {
        format: "DVD",
        price: "$4.80+",
        source: "eBay",
        url: "https://www.ebay.com/p/25046021108",
        note: "Budget option, ships from South Korea",
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
        format: "Blu-ray (Budget)",
        price: "$11.99",
        source: "SloppySecondSales",
        url: "https://sloppysecondsales.com/index.php/product/gunsmith-cats-1995-1996-complete-ova-series-region-free-bluray/",
        note: "Region-free, complete OVA series",
      },
      {
        format: "DVD (Bulletproof)",
        price: "~$19.99",
        source: "Amazon",
        url: "https://www.amazon.com/Gunsmith-Cats-Bulletproof/dp/B000059RZ9",
        note: "ADV Films, all 3 episodes + making-of",
      },
      {
        format: "Blu-ray (Explosive Edition)",
        price: "$399.99",
        source: "eBay",
        url: "https://www.ebay.com/p/11035367594",
        note: "AnimEigo Kickstarter Exclusive, extremely rare",
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
        format: "DVD (OVA Set)",
        price: "$100.04",
        source: "eBay",
        url: "https://www.ebay.com/itm/396165547649",
        note: "Region 2 Japan, Japanese only, free expedited shipping",
      },
      {
        format: "DVD (1 & 2 Set)",
        price: "High (check listing)",
        source: "eBay",
        url: "https://www.ebay.com/itm/393979860933",
        note: "Rare, +$29 shipping from Japan, 32 watchers",
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
        price: "Check listing",
        source: "Amazon",
        url: "https://www.amazon.com/Vampire-Hunter-Blu-ray-Artist-Provided/dp/B00WHZZAP6",
        note: "Sentai Filmworks, Region A",
      },
      {
        format: "Blu-ray (Steelbook)",
        price: "Check listing",
        source: "Amazon",
        url: "https://www.amazon.com/Vampire-Hunter-D-Blu-ray-Steelbook/dp/B0851M4HYT",
        note: "Remastered steelbook edition",
      },
      {
        format: "Blu-ray / DVD",
        price: "$15.00–$40.00+",
        source: "eBay",
        url: "https://www.ebay.com/p/15046034435",
        note: "Multiple editions, new and used",
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
        price: "From $91.00",
        source: "Amazon",
        url: "https://www.amazon.com/Vampire-Hunter-D-Bloodlust-Blu-ray/dp/B0125NDD6M",
        note: "Discotek Media, OOP, third-party sellers",
      },
      {
        format: "DVD",
        price: "From $18.92",
        source: "Amazon",
        url: "https://www.amazon.com/Vampire-Hunter-Bloodlust-Standard-DVD/dp/B07CQKKFTK",
        note: "Standard DVD edition",
      },
      {
        format: "DVD (Double Feature)",
        price: "Varies",
        source: "Amazon",
        url: "https://www.amazon.com/Vampire-Hunter-Bloodlust-Anime-Collection/dp/B0G8SLKF9K",
        note: "Both VHD films in one set",
      },
      {
        format: "Blu-ray / DVD",
        price: "Varies",
        source: "eBay",
        url: "https://www.ebay.com/p/10046035107",
        note: "Discotek with slipcover listed as RARE OOP",
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
