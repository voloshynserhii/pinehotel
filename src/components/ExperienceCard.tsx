import type { Experience } from '@/app/types';

interface ExperienceCardProps {
  experience: Experience;
  t: {
    experiences: {
      id: number;
      name: string;
      description: string;
    }[];
  }
}

export function ExperienceCard({ experience, t }: ExperienceCardProps) {
  const experienceData = t.experiences.find((e: any) => e.id === experience.id);

  if (!experienceData) {
    return null;
  }

  return (
    <div className="space-y-4 text-center">
      <div className="text-5xl">{experience.icon}</div>
      <h3 className="text-xl font-serif font-bold text-stone-900">
        {experienceData?.name}
      </h3>
      <p className="text-stone-700 leading-relaxed">
        {experienceData?.description}
      </p>
    </div>
  );
}
