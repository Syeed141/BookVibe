import React from "react";
import BooksBanner from "../../assets/books.jpg";
// backgroundImage: `url(${BooksBanner})`,

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BooksBanner}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className="space-y-5">
      <h1 className="text-5xl font-bold space-y-5">Books to freshen up your bookshelf!</h1>
      
      <button className="btn btn-primary">View List</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
