export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-serif mb-4">Our Story</h3>
          <p className="text-gray-700 leading-relaxed">
            We met by chance and everything felt right. These photos are small
            pieces of our journey leading up to the biggest day. We wanted to
            capture laughter, quiet moments, and the little things that make us
            — us.
          </p>
        </div>
        <div>
          <img
            src="/img/pre-12.jpg"
            alt="couple story"
            className="w-full rounded-lg shadow-lg object-cover h-72"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="/img/pre-10.jpg"
            alt="couple story"
            className="w-full rounded-lg shadow-lg object-cover h-72"
          />
        </div>
        <div>
          <h3 className="text-2xl font-serif mb-4">Our Pre-Wedding</h3>
          <p className="text-gray-700 leading-relaxed">
            Our pre-wedding moments were a celebration of love and anticipation.
            They remind us that this journey is not just about the wedding, but
            about building a lifetime of memories side by side.
          </p>
        </div>
      </div>
    </section>
  );
}
