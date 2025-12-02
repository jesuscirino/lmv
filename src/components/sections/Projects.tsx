import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import projectsContent from '@/content/projects.json';

export function Projects() {
    const { t } = useTranslation();

    const sectionTitle = t(projectsContent.sectionTitle);
    const sectionDescription = t(projectsContent.sectionDescription);
    const projects = projectsContent.projects;

    return (
        <section id="projects" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {sectionTitle}
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        {sectionDescription}
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-start justify-between"
                        >
                            <div className="relative w-full">
                                <img
                                    src={project.image}
                                    alt={t(project.title)}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <span className="text-gray-500 dark:text-gray-400">{t(project.category)}</span>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                                        <span className="absolute inset-0" />
                                        {t(project.title)}
                                    </h3>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
