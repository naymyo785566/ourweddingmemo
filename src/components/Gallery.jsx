import PhotoCard from "./PhotoCard";

const photos = [
  {
    src: "/img/pre-2.jpg",
    alt: "",
  },
  {
    src: "/img/pre-3.jpg",
    alt: "",
  },
  {
    src: "/img/pre-4.jpg",
    alt: "",
  },
  {
    src: "/img/pre-5.jpg",
    alt: "",
  },
  {
    src: "/img/pre-6.jpg",
    alt: "",
  },
  {
    src: "/img/pre-9.jpg",
    alt: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <h2 className="text-3xl font-serif text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((p, i) => (
          <PhotoCard key={i} src={p.src} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}
