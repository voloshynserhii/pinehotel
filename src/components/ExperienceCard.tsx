import type { Experience } from '@/app/types';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const iconMap: Record<string, string> = {
    leaf: '🍃',
    bicycle: '🚴',
    spa: '💆',
    mountain: '⛰️',
    map: '🗺️',
    sun: '🌅',
  };

  return (
    <div className="space-y-4 text-center">
      <div className="text-5xl">{iconMap[experience.icon] || '✨'}</div>
      <h3 className="text-xl font-serif font-bold text-stone-900">
        {experience.title}
      </h3>
      <p className="text-stone-700 leading-relaxed">
        {experience.description}
      </p>
    </div>
  );
}
