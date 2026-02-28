import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight">
            About{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Book Vibe
            </span>
          </h1>
          <p className="text-base opacity-80 max-w-2xl mx-auto">
            Book Vibe is a simple reading companion to help you discover books,
            organize your reading journey, and keep track of what you’ve read
            and what you want to read next.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Mission */}
          <div className="p-6 rounded-2xl bg-base-200 border border-base-300 shadow">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="opacity-80 leading-relaxed">
              Make reading more fun and organized. Whether you’re a casual
              reader or a bookworm, Book Vibe helps you build habits, track
              progress, and stay motivated.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge badge-outline">Track Reading</span>
              <span className="badge badge-outline">Save Favorites</span>
              <span className="badge badge-outline">Build Wishlist</span>
            </div>
          </div>

          {/* What you can do */}
          <div className="p-6 rounded-2xl bg-base-200 border border-base-300 shadow">
            <h2 className="text-2xl font-bold mb-2">What You Can Do</h2>
            <ul className="space-y-3 opacity-85">
              <li className="flex gap-2">
                <span>✅</span>
                <span>Add books to your <b>Read List</b> and keep it updated</span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>Create a <b>Wish List</b> for books you want to read</span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>Sort and manage your lists for a clean reading flow</span>
              </li>
            </ul>
          </div>

          {/* Why Book Vibe */}
          <div className="p-6 rounded-2xl bg-base-200 border border-base-300 shadow md:col-span-2">
            <h2 className="text-2xl font-bold mb-2">Why Book Vibe?</h2>
            <p className="opacity-80 leading-relaxed">
              Because your reading journey deserves its own space. Book Vibe
              keeps things lightweight, fast, and easy—so you can focus on what
              matters: enjoying books.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
              <div className="opacity-80">
                <p className="font-semibold">Built with</p>
                <p className="text-sm">React • React Router • Tailwind • DaisyUI</p>
              </div>

              <button className="btn btn-primary">
                Explore Books
              </button>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center mt-10 opacity-60 text-sm">
          “A reader lives a thousand lives before he dies.” — George R.R. Martin
        </p>
      </div>
    </div>
    );
};

export default About;