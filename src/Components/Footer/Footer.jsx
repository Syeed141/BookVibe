import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      {/* top */}
      <div className="footer p-10 sm:footer-horizontal max-w-6xl mx-auto">
        <aside className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl">
              📚
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Book{" "}
              <span className="font-extrabold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Vibe
              </span>
            </h2>
          </div>

          <p className="opacity-80 max-w-sm leading-relaxed">
            Discover your next favorite read. Track your reading list, build your
            wishlist, and keep the vibe going—one book at a time.
          </p>

          <div className="flex gap-2">
            <span className="badge badge-outline">Read</span>
            {/* <span className="badge badge-outline">Wishlist</span> */}
            <span className="badge badge-outline">Reviews</span>
          </div>
        </aside>

        <nav>
         
          <h6 className="footer-title">Explore</h6>
          <NavLink className="link link-hover" to="/Home">
            Home
          </NavLink>
          <NavLink className="link link-hover" to="/ReadList">
            Read List
          </NavLink>
          {/* <NavLink className="link link-hover" to="/WishList">
            Wish List
          </NavLink> */}
          <NavLink className="link link-hover" to="/About">
            About
          </NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">Support</h6>
          <NavLink className="link link-hover" to="/Contact">
            Contact
          </NavLink>
          <NavLink className="link link-hover" to="/FAQ">
            FAQ
          </NavLink>
          <a className="link link-hover" href="#">
            Report an issue
          </a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>

          <div className="flex items-center gap-3">
            <a
              className="btn btn-ghost btn-circle"
              href="#"
              aria-label="Twitter/X"
              title="Twitter/X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-current opacity-90"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a
              className="btn btn-ghost btn-circle"
              href="#"
              aria-label="YouTube"
              title="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-current opacity-90"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>

            <a
              className="btn btn-ghost btn-circle"
              href="#"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-current opacity-90"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>

          <p className="text-sm opacity-70 mt-2">
            Follow for new releases & reading tips.
          </p>
        </nav>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <NavLink className="link link-hover opacity-70" to="/Privacy">
              Privacy
            </NavLink>
            <NavLink className="link link-hover opacity-70" to="/Terms">
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;