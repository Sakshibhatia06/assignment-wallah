"use client";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    category: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
    deadline: "",
    pages: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* ---------- Animated Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff7f2] via-[#fff] to-[#ffe6cc] animate-gradientMove"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-72 h-72 bg-[#ff6f00]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#ff6f00]/20 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="relative mx-auto max-w-6xl px-4 md:px-8 z-10">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* ---------- LEFT CONTENT ---------- */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-3 text-3xl font-extrabold leading-snug text-[#1a1a1a] md:text-4xl lg:text-5xl">
              <span className="text-[#2596be]">MyAssignmentHelp</span> —{" "}
              <span className="text-[#1a1a1a]">Expert Help to Do My Assignment!</span>
            </h1>
            <p className="mb-6 text-lg text-gray-700">
              Comprehensive Assignment Assistance With a <strong>No-AI Guarantee!</strong>
            </p>
            <p className="text-sm font-medium text-gray-600">
              Trusted by <strong>1.5M+</strong> happy customers
            </p>
          </div>

          {/* ---------- RIGHT FORM ---------- */}
          <div className="mt-10 w-full lg:w-1/2">
            <div className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md p-6 shadow-xl transition hover:shadow-2xl">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                AI-Free Assignment Help From 5000+ Real Experts
              </h3>
              <ul className="mb-5 flex flex-wrap gap-x-6 text-sm text-gray-600">
                <li>✔ Guaranteed Grade or Refund</li>
                <li>✔ No AI</li>
                <li>✔ 24/7 Support</li>
              </ul>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Category Options */}
                <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-700">
                  {["Writing", "Technical", "Online Class"].map((cat) => (
                    <label
                      key={cat}
                      className={`cursor-pointer rounded-md border px-4 py-2 ${
                        formData.category === cat
                          ? "border-[#2596be] text-[#2596be]"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {cat}
                    </label>
                  ))}
                </div>

                {/* Floating Label Inputs */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      className="peer w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-[#2596be] focus:outline-none"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#2596be]"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      className="peer w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-[#2596be] focus:outline-none"
                      placeholder="Phone"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#2596be]"
                    >
                      Phone No.
                    </label>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={handleChange}
                    className="peer w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-[#2596be] focus:outline-none"
                    placeholder="Subject"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#2596be]"
                  >
                    Subject / Course Code
                  </label>
                </div>

                {/* Description */}
                <div className="relative">
                  <textarea
                    name="description"
                    id="description"
                    rows={3}
                    onChange={handleChange}
                    className="peer w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-[#2596be] focus:outline-none"
                    placeholder="Description"
                  ></textarea>
                  <label
                    htmlFor="description"
                    className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#2596be]"
                  >
                    Description (Write / Attach)
                  </label>
                </div>

                {/* Deadline & Pages */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="datetime-local"
                    name="deadline"
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2596be] focus:outline-none"
                  />
                  <div className="flex items-center justify-between rounded-md border border-gray-300 px-3 py-2">
                    <label className="text-gray-600">Pages</label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            pages: Math.max(1, formData.pages - 1),
                          })
                        }
                        className="px-2 text-lg font-bold"
                      >
                        -
                      </button>
                      <span>{formData.pages}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, pages: formData.pages + 1 })
                        }
                        className="px-2 text-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <label className="block cursor-pointer text-sm text-gray-600">
                  <input type="file" className="hidden" /> 📎 Attach file
                </label>

                {/* Checkbox */}
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" required />
                  <span>I accept the T&C, agree to receive offers & updates.</span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#2596be] py-3 font-semibold text-white transition hover:bg-[#2596be]"
                >
                  Do My Assignment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Animation Styles ---------- */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
