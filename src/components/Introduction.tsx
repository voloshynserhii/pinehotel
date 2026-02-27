interface IntroductionProps {
  title: string;
  text: string;
  paragraph?: string;

}

export function Introduction({ title, text, paragraph }: IntroductionProps) {
  return (
    <section className="py-section bg-cream-50">
      <div className="container mx-auto px-gutter flex flex-col md:flex-row gap-12">
        <div className="md:w-1/4">
          <h2 className="text-2xl font-serif text-stone-900">
            {title}
          </h2>
        </div>
        <div className="md:w-3/4">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            {text}
          </p>
          <div className="text-lg text-stone-700 leading-relaxed whitespace-pre-line">
            {paragraph}
          </div>
        </div>
      </div>
    </section>
  );
}
