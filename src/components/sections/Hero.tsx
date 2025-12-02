"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import content from "@/content/home.json";

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Image - Layer 1 (Bottom) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Dark overlay - Layer 2 */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Content - Layer 3 (Top) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg"
        >
          {t(content.hero.headline)}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-100 drop-shadow-md"
        >
          {t(content.hero.subheadline)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={handleScrollToContact}
            className="w-full text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold shadow-xl"
          >
            {t(content.hero.ctaText)}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollToProjects}
            className="w-full text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold shadow-xl"
          >
            {t(content.hero.ctaSecondaryText)} <span aria-hidden="true">→</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
