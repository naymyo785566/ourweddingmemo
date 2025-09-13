import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  async function submit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      alert("Please enter both name and message.");
      return;
    }

    try {
      fetch(
        "https://script.google.com/macros/s/AKfycbwSsbhIb3DvDG4iF5L4pB0eEIho1bVbdjxHCeV6uApaBTGGpFK8qnweUyAAfVpwf1jj/exec",
        {
          method: "POST",
          contentType: "application/json",
          body: JSON.stringify({ name: form.name, message: form.message }),
        }
      );
      setSent(true);
      setForm({ name: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("Error saving message:", error);
      alert("Oops! Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="grid md:grid-cols-3 gap-3 items-start">
        <div>
          <h3 className="text-2xl font-serif text-center mb-6">
            Send Us Your Wishes
          </h3>
          <form
            onSubmit={submit}
            className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-md border"
          >
            <label className="block mb-3">
              <div className="text-sm text-gray-600 mb-1">Name</div>
              <input
                name="name"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full p-2 border rounded"
                placeholder="Your name"
                required
              />
            </label>
            <label className="block mb-3">
              <div className="text-sm text-gray-600 mb-1">Message</div>
              <textarea
                name="message"
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Your wishes..."
                required
              />
            </label>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-gray-100 rounded shadow hover:bg-blue-700"
              >
                Send
              </button>
              {sent && (
                <div className="text-sm text-green-600">Sent! Thank you ❤️</div>
              )}
            </div>
          </form>
        </div>

        {/* Payment Images */}
        <div className="flex justify-center mx-auto mt-5 shadow-md p-4 rounded-md border">
          <img
            src="/public/img/kpay.jpg"
            alt="KPay"
            className="w-48 h-80 object-cover"
          />
        </div>
        <div className="flex justify-center mx-auto mt-5 shadow-md p-4 rounded-md border">
          <img
            src="/public/img/yoma.jpg"
            alt="Yoma"
            className="w-48 h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
