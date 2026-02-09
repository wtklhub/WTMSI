import { GridLine } from "./grid-background";

const partnerRows = [
  [
    { name: "Watatrip", width: "w-28" },
    { name: "DICT", width: "w-20" },
    { name: "DOST", width: "w-20" },
    { name: "DOT", width: "w-16" },
  ],
  [
    { name: "DENR", width: "w-20" },
    { name: "DepEd", width: "w-24" },
    { name: "DPWH", width: "w-22" },
    { name: "CHED", width: "w-20" },
  ],
  [
    { name: "LGU Partners", width: "w-28" },
    { name: "PhilGEPS", width: "w-24" },
    { name: "Globe", width: "w-20" },
    { name: "PLDT", width: "w-16" },
  ],
];

export function PartnersSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee2312] mb-4">
            Partners & Collaborators
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Trusted by organizations{" "}
            <span className="text-neutral-500">across industries.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-400">
            We work alongside government agencies, private enterprises, and
            startups to deliver software that drives real impact.
          </p>
        </div>

        {/* Partner grid — rows separated by horizontal grid lines */}
        {partnerRows.map((row, rowIdx) => (
          <div key={rowIdx}>
            <GridLine />
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {row.map((partner, i) => (
                <div
                  key={partner.name}
                  className={`flex items-center justify-center py-8 px-4 sm:py-10 sm:px-6 ${
                    i < row.length - 1 ? "sm:border-r sm:border-white/[0.08]" : ""
                  } ${i % 2 === 0 ? "border-r border-white/[0.08] sm:border-r-0" : ""} ${
                    i < 2 ? "border-b border-white/[0.08] sm:border-b-0" : ""
                  } ${i < row.length - 1 ? "sm:border-r sm:border-white/[0.08]" : ""}`}
                >
                  <span className="text-base font-bold tracking-tight text-white/80 sm:text-xl md:text-2xl">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <GridLine />

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500">
            And many more government agencies, enterprises, and startups
            throughout the Philippines and Southeast Asia.
          </p>
        </div>
      </div>
    </section>
  );
}
