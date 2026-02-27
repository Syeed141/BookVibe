import React from "react";

import { Star } from "lucide-react";
import { NavLink } from "react-router";


const Book = ({ SingleBook }) => {
  const { author, image, tags, bookName, category, rating, yearOfPublishing, bookId } =   SingleBook;

    console.log(SingleBook)

  return (
    <NavLink to ={`/BookDetails/${bookId}`}>

      <div
        className="w-65 rounded-2xl border border-black/5 bg-white p-5 shadow-sm
  transition-all duration-300 ease-out
  hover:-translate-y-2 hover:shadow-xl hover:border-black/10"
      >
        {/* Image block */}
        <div className="relative rounded-2xl bg-neutral-100 p-4">
          <div className="flex justify-center">
            <img
              src={image}
              alt={bookName}
              className="h-37 w-auto object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 2).map((t, idx) => (
            <span
              key={idx}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-4 line-clamp-2 font-serif text-xl font-semibold text-neutral-900">
          {bookName}
        </h3>

        {/* Author */}
        <div className="flex justify-between">
          <p className="mt-1 text-sm text-neutral-600">By : {author} </p>
          <p className="mt-1 text-sm text-cyan-500 font-bold ">
            {" "}
            {yearOfPublishing}{" "}
          </p>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-neutral-300" />

        {/* Bottom row */}
        <div className="flex items-center justify-between text-sm text-neutral-700">
          <span>{category}</span>

          <div className="flex items-center gap-2">
            <span>{Number(rating).toFixed(2)}</span>
            <Star className="h-4 w-4" />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Book;
