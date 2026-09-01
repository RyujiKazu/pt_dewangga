import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white shadow-[0_12px_35px_rgba(6,26,64,0.055)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={project.image}
          alt={`Tampilan ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="bg-navy-deep px-3 py-2 text-[0.58rem] font-bold tracking-[0.15em] text-white uppercase">{project.status}</span>
          <span className="grid size-9 place-items-center border border-white/35 bg-navy-deep/65 text-xs font-semibold text-white backdrop-blur-sm">0{index + 1}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.08em] text-teal-dark uppercase">
          <MapPin aria-hidden="true" className="size-3.5 text-gold" />
          {project.location}
        </div>
        <h3 className="font-heading mt-3 text-3xl leading-none font-semibold text-navy-deep">{project.name}</h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{project.description}</p>
        <Link href="#kontak" aria-label={`Lihat detail ${project.name}`} className="mt-6 flex min-h-11 items-center justify-between border-t border-slate-200 pt-4 text-[0.68rem] font-bold tracking-[0.14em] text-navy uppercase transition-colors hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
          Lihat Detail
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
