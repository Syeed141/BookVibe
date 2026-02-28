import React from "react";

const MarkAsReadComponent = ({ book }) => {
  const {
    image,
    title,
    author,
    tags = [],
    publisher,
    totalPages,
    yearOfPublishing,
    category,
    rating,
  } = book;

  return (
    <div className="my-4 w-full rounded-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-5 flex gap-6" >
      {/* Left: Image */}
      <div className="w-28 h-36 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Right: Content */}
      <div className="flex-1">
        <h2 className="text-xl font-extrabold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">
          By : <span className="font-medium">{author}</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-sm font-semibold text-gray-700">Tag</span>
          {tags.map((t, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-100"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Meta Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="opacity-70">👤</span>
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-70">📄</span>
            <span>Page {totalPages}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-70">🕒</span>
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        {/* Bottom Chips + Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              Category: {category}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
              Rating: {rating}
            </span>
          </div>

          <button className="btn btn-success rounded-full px-6 min-h-0 h-10 text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkAsReadComponent;
