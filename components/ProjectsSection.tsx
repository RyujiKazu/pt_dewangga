import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section id="proyek" aria-labelledby="projects-title" className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="section-shell">
        <div id="projects-title">
          <SectionHeader
            eyebrow="Portofolio Pengembangan"
            title="Proyek Kami"
            description="Temukan hunian yang dirancang untuk kenyamanan hari ini dan investasi masa depan. Seluruh proyek di bawah ini masih merupakan contoh tampilan dan menunggu data resmi perusahaan."
          />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
