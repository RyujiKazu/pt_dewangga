const statistics = [
  ['10+', 'Tahun Pengalaman'],
  ['15+', 'Proyek Dikembangkan'],
  ['500+', 'Unit Hunian'],
  ['98%', 'Kepuasan Pelanggan'],
];

export function StatisticsSection() {
  return (
    <section aria-labelledby="statistics-title" className="relative overflow-hidden bg-teal-dark py-16 text-white sm:py-20">
      <div className="architectural-grid absolute inset-0 opacity-25" />
      <div className="section-shell relative">
        <div className="mb-10 flex flex-col justify-between gap-3 border-b border-white/20 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.22em] text-gold-light uppercase">Company Highlight</p>
            <h2 id="statistics-title" className="font-heading mt-2 text-3xl font-semibold sm:text-4xl">Tumbuh Bersama Kepercayaan</h2>
          </div>
          <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-white/55 uppercase">Data placeholder — menunggu data resmi</p>
        </div>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {statistics.map(([value, label], index) => (
            <div key={label} className={`px-4 first:pl-0 lg:px-8 ${index > 0 ? 'border-l border-white/20' : ''} ${index === 2 ? 'max-lg:border-l-0 max-lg:pl-0' : ''}`}>
              <p className="font-heading text-5xl leading-none font-semibold text-gold-light sm:text-6xl">{value}</p>
              <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.12em] text-white/72 uppercase sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
