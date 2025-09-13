export default function Navbar() {
  const links = [
    { label: "Home", to: "#hero" },
    { label: "Gallery", to: "#gallery" },
    { label: "About", to: "#about" },
    { label: "Countdown", to: "#countdown" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl  mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="font-serif text-xl  text-rose font-semibold"
          >
            Our Moments
          </a>
          <div className="hidden  md:flex gap-6">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                className="font-semibold  hover:text-rose transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
