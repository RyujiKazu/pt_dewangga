type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverse?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className={`mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-9 bg-gold" />
        <p
          className={`text-[0.67rem] font-bold tracking-[0.24em] uppercase ${
            inverse ? 'text-gold-light' : 'text-teal-dark'
          }`}
        >
          {eyebrow}
        </p>
        {align === 'center' ? <span className="h-px w-9 bg-gold" /> : null}
      </div>
      <h2
        className={`font-heading text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.98] font-semibold tracking-[-0.025em] text-balance ${
          inverse ? 'text-white' : 'text-navy-deep'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-sm leading-7 sm:text-base ${inverse ? 'text-white/68' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
