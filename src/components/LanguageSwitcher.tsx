'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/types/content';

export function LanguageSwitcher() {
  const { currentLang, setLang } = useLanguage();

  const toggleLanguage = () => {
    setLang(currentLang === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Switch language"
    >
      <motion.span
        key={currentLang}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1"
      >
        <span className="text-xs">🌐</span>
        <span className="uppercase">{currentLang}</span>
      </motion.span>
    </button>
  );
}
