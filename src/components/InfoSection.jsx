
export default function InfoSection({ title, paragraphs = [] }) {
  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <div className="space-y-4">
        <h1 className="text-lg md:text-xl font-semibold leading-relaxed">
          {title}
        </h1>

        {paragraphs.length > 0 &&
          paragraphs.map((p, index) => (
            <p
              key={index}
              className="text-gray-600 leading-relaxed text-sm md:text-base"
            >
              {p}
            </p>
          ))}
      </div>
    </div>
  );
}
