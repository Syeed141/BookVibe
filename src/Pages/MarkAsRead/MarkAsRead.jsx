import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData } from "../../Utilities/Localstorage";
import MarkAsReadComponent from "../../Components/MarkAsReadViewier/MarkAsReadComponent";

const MarkAsRead = () => {
  const data = useLoaderData();
  const [MyRL, SetMyRL] = useState([]);
  const [Sort, SetSort] = useState("");

  useEffect(() => {
    const loadLocalStorageData = getStoredData() || [];
    const intVal = loadLocalStorageData.map((id) => parseInt(id, 10));

    const myReadList = (data || []).filter((book) =>
      intVal.includes(book.bookId),
    );

    SetMyRL(myReadList);
  }, [data]);

  const handleSort = (type) => {
    SetSort(type);

    if (type === "pages") {
      const sortedByPages = [...MyRL].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      SetMyRL(sortedByPages);
    }

    if (type === "ratings") {
      const sortedByRating = [...MyRL].sort((a, b) => b.rating - a.rating);
      SetMyRL(sortedByRating);
    }
  };

  return (
    <div>
      <div className="flex justify-center my-6">
        <details className="dropdown">
          <summary className="btn m-1">Sort By : {Sort}</summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow">
            <li>
              <button type="button" onClick={() => handleSort("pages")}>
                Pages
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSort("ratings")}>
                Ratings
              </button>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
        </TabList>

        <TabPanel>
          <div className="p-2 mb-2 space-y-4">
            {MyRL.map((SB) => (
              <MarkAsReadComponent key={SB.bookId} book={SB} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MarkAsRead;
