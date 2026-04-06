import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-3xl w-full text-center">
        
        <p className="text-sm opacity-70">Connect with me</p>

        <h1 className="text-4xl md:text-5xl font-semibold mt-2 mb-4">
          Get in touch
        </h1>

        <p className="opacity-80 mb-8">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <form className="flex flex-col gap-5">
          
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border border-purple-500/40 rounded-lg px-4 py-3 outline-none focus:border-purple-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-purple-500/40 rounded-lg px-4 py-3 outline-none focus:border-purple-400"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Enter your message"
            rows="6"
            className="w-full bg-transparent border border-purple-500/40 rounded-lg px-4 py-3 outline-none resize-none focus:border-purple-400"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="mx-auto mt-4 px-8 py-3 rounded-full border border-purple-500/40 hover:bg-purple-600 transition-all duration-300"
          >
            Submit now →
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;