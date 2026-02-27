import React, { useEffect, useState } from 'react';
import Book from '../../Components/Book/Book';

const AllBooks = () => {


    const [AllBooks, SetAllBooks] = useState([])

    useEffect(() => {

        fetch("booksData.json")
        .then(res => res.json())
        .then(data => SetAllBooks(data))



    },[])

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-4 justify-items-center mt-8 mb-8'>

            {
                AllBooks.map((SingleBook) => <Book SingleBook={SingleBook} > </Book>)

            }
            
        </div>
    );
};

export default AllBooks;