import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully ✅");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 text-black dark:text-white"
    >
      <div className="max-w-3xl w-full text-center">
        
        <p className="text-sm opacity-70">Connect with me</p>

        <h1 className="text-4xl md:text-5xl font-semibold mt-2 mb-4">
          Get in touch
        </h1>

        <p className="opacity-80 mb-8">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-5">
            
            <div className="w-full text-left">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border border-purple-500/40 rounded-lg px-4 py-3 outline-none focus:border-purple-400"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="w-full text-left">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent border border-purple-500/40 rounded-lg px-4 py-3 outline-none focus:border-purple-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

          </div>

          {/* Message */}
          <div className="text-left">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="6"
              className="w-full bg-transparent border border-purple-500/40 rounded-lg px-4 py-3 outline-none resize-none focus:border-purple-400"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mx-auto mt-4 px-8 py-3 rounded-full border border-purple-500/40 hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Submit now →
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;