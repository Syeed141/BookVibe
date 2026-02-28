import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addToLocalStorage } from "../../Utilities/Localstorage";

const BookDetails = () => {
  const { id } = useParams();

  const [BookDetails, SetBookDetails] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => SetBookDetails(data));
  }, []);


  const Bookid = parseInt(id);

  const SingleBookDetail = BookDetails.find((book) => book.bookId === Bookid );
  
  //console.log("Single book details : ", SingleBookDetail)

if (!SingleBookDetail) return <p>Loading...</p>;
const { author,image, tags, bookName, category, rating, yearOfPublishing, bookId,
review} = SingleBookDetail;
  
const PassBookid = (id) => {

   

    addToLocalStorage(id)



}







return (
     <div className="max-w-6xl mx-auto p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-3xl bg-white p-8 shadow-sm">
        {/* Left: Image */}
        <div className="flex justify-center">
          <div className="rounded-3xl bg-neutral-100 p-8">
            <img
              src={image}
              alt={bookName}
              className="h-90 w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="font-serif text-4xl font-semibold text-neutral-900">
            {bookName}
          </h1>

          <p className="mt-2 text-sm text-neutral-700">
            By : <span className="font-medium">{author}</span>
          </p>
          <p className="mt-2 text-sm text-neutral-700">
           <span className="font-bold">Review : </span>  {review}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {(tags || []).map((t, idx) => (
              <span
                key={idx}
                className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-700"
              >
                #{t}
              </span>
            ))}
          </div>

          <div className="my-6 border-t border-dashed border-neutral-300" />

          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div className="text-neutral-500">Category:</div>
            <div className="font-semibold text-neutral-900">{category}</div>

            <div className="text-neutral-500">Rating:</div>
            <div className="font-semibold text-neutral-900">{rating}</div>

            <div className="text-neutral-500">Year of Publishing:</div>
            <div className="font-semibold text-neutral-900">
              {yearOfPublishing}
            </div>

            <div className="text-neutral-500">Book Id:</div>
            <div className="font-semibold text-neutral-900">{bookId}</div>
          </div>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50">
              Mark as Read
            </button>
            <button onClick={()=> PassBookid(bookId)} className="rounded-xl bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-95 active:brightness-90">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
