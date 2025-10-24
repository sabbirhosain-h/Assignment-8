const storeApp = () => {
    const storedApp = localStorage.getItem("installed");

    if(storedApp){
        const storedAppData =JSON.parse(storedApp);
        return storedAppData;
    }
    else{
        return [];
    }
}

const addInDB = (id) => {
    const storedInstalationData = storeApp()

    if(storedInstalationData.includes(id)){
        alert("ache")
    }
    else{
        storedInstalationData.push(id);
        const data = JSON.stringify(storedInstalationData);
        localStorage.setItem("installed",data)
    }
}
export { addInDB, storeApp }