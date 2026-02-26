import React from "react";
import BooksBanner from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen m-5 max-w-6xl mx-auto"
      style={{
        backgroundImage: `url(${BooksBanner})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
