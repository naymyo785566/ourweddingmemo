import { useEffect, useState } from "react";

export default function Countdown() {
  // set your wedding date here (YYYY, M-1, D)
  const wedding = new Date(2025, 10 - 1, 11); // Dec 20, 2025
  const [diff, setDiff] = useState(getDiff());

  function getDiff() {
    const now = new Date();
    const ms = Math.max(0, wedding - now);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const id = setInterval(() => setDiff(getDiff()), 1000);
    return () => clearInterval(id);
  });

  return (
    <section id="countdown" className="py-16 text-center">
      <h3 className="text-2xl font-serif mb-4">Countdown to the Wedding</h3>
      <p className="mb-8">
        We're getting married on {wedding.toLocaleDateString("en-US")}
      </p>
      <div className="inline-grid grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="text-3xl font-semibold">{diff.days}</div>
          <div className="text-sm text-gray-500">Days</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="text-3xl font-semibold">{diff.hours}</div>
          <div className="text-sm text-gray-500">Hours</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="text-3xl font-semibold">{diff.minutes}</div>
          <div className="text-sm text-gray-500">Minutes</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="text-3xl font-semibold">{diff.seconds}</div>
          <div className="text-sm text-gray-500">Seconds</div>
        </div>
      </div>
    </section>
  );
}
