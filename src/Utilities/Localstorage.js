

const getStoredData = () => {


    const storedData = localStorage.getItem("ReadList");


    if(storedData) {


        const readlist = JSON.parse(storedData);
        return readlist;
    }

    else {

        return []
    }



}





const addToLocalStorage = (id) => {



    const storageData = getStoredData()


    if(storageData.includes(id)) {

        alert("Data already exists")
    }

    else {


        storageData.push(id)

        const data = JSON.stringify(storageData)

        localStorage.setItem("ReadList", data)
    }



}

export {addToLocalStorage, getStoredData}