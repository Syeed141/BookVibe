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

        <div>

            {
                AllBooks.map((SingleBook) => <Book SingleBook={SingleBook} > </Book>)

            }
            
        </div>
    );
};

export default AllBooks;