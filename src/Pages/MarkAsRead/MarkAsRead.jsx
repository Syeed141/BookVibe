import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData } from "../../Utilities/Localstorage";
import Book from "../../Components/Book/Book";

const MarkAsRead = () => {
  const data = useLoaderData();

  console.log("Data via loader :", data);

  const [MyRL, SetMyRL] = useState([])

    useEffect(()=> {




        const loadLocalStorageData = getStoredData();

        console.log(loadLocalStorageData)

        const intVal = loadLocalStorageData.map((id)=> parseInt(id));

        console.log(intVal)

        const MyReadList = data.filter((book) => loadLocalStorageData.includes(book.bookId))

        SetMyRL(MyReadList)


    }, [data])


  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>{MyRL.length}</h2>
    {

        MyRL.map((SB) => <Book SingleBook={SB}></Book>)
    }

        </TabPanel>
        <TabPanel>
          <h2>My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MarkAsRead;
