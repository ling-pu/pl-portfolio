// src/sections/Contact.jsx
export default function Contact() {
  return (
    <section className="contact min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-xl text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Thank you for your interest in my portfolio!</h2>
        <h3>I’m available for freelance web projects, commercial and personal illustration, and full-time opportunities. Feel free to reach out if you’d like to connect!</h3>
        {/* Email */}
        <p className="mb-4 text-gray-700">
          <a
            href="mailto:impu317@gmail.com"
            className="button-style text-black underline underline-offset-4 hover:text-gray-500 transition"
          >
            SEND EMAIL
          </a>
        </p>

        {/* Resume */}
        <div className="mb-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        {/* Contact Form */}
        {/* <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-black"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-black"
          />

          <button
            type="submit"
            className="w-full py-3 border border-black rounded-md font-medium hover:bg-black hover:text-white transition"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
}
