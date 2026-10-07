// components/SectionHeading.tsx
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center max-w-2xl mx-auto" : ""}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-green-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  );
}