const fetchDataFromAPI = async (params) => {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbyOm6P2StGc8wisiCUcIxYcaJB9-oaW1E2f_oDaY5u_gsdCubO8VYqDiOmr25S_3EUm/exec'; // Replace with your actual API URL
    try {
        const response = await fetch(`${apiUrl}?${params}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'An error occurred while fetching data.' };
    }
}

export const createTDB = async (userData) => {
    const params = `action=createTDB&createTDB=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const getTDBNames = async (userData) => {
    const params = `action=getTDBNames&getTDBNames=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const deleteTDB = async (userData) => {
    const params = `action=deleteTDB&deleteTDB=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const updateTDB = async (userData) => {
    const params = `action=updateTDB&updateTDB=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const getTDBdata = async (userData) => {
    const params = `action=getTDBdata&getTDBdata=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const findTDBdata = async (userData) => {
    const params = `action=findTDBdata&findTDBdata=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const clearTDB = async (userData) => {
    const params = `action=clearTDB&clearTDB=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const addSingleTDBData = async (org,room,value1,value2,value3) => {
    // https://script.google.com/macros/s/AKfycbyOm6P2StGc8wisiCUcIxYcaJB9-oaW1E2f_oDaY5u_gsdCubO8VYqDiOmr25S_3EUm/exec?action=addSingleTDBData&addSingleTDBData=1mCcZJUIPQ63mEhLKLv-nyKdRBoUYMWbsbsfH5r8-xDY,Organization,mk09,mk,kkkkkkkk
    const params = `action=addSingleTDBData&addSingleTDBData=${org},${room},${value1},${value2},${value3}`;
    return fetchDataFromAPI(params); 
}
export const updateTDBData = async (userData) => {
    const params = `action=updateTDBData&updateTDBData=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const delitTDBkeyColumn = async (userData) => {
    const params = `action=delitTDBkeyColumn&delitTDBkeyColumn=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const delitSingleTDBData = async (userData) => {
    const params = `action=delitSingleTDBData&delitSingleTDBData=${userData}`; 
    return fetchDataFromAPI(params); 
}
export const defaultAction = async (userData) => {
    const params = `action=defaultAction&defaultAction=${userData}`; 
    return fetchDataFromAPI(params); 
}


// createTDB   url?action=createTDB&createTDB=SECRET_ID,TABLE_NAME
// getTDBNames  url?action=getTDBNames&getTDBNames=SECRET_ID
// deleteTDB    url?action=deleteTDB&deleteTDB=SECRET_ID,TABLE_NAME
// updateTDB    url?action=updateTDB&updateTDB=SECRET_ID,OldTableName,NewTableName
// getTDBdata    url?action=getTDBdata&getTDBdata=SECRET_ID,TABLE_NAME
// findTDBdata    url?action=findTDBdata&findTDBdata=SECRET_ID,TABLE_NAME,ColumnName,SearchValue
// clearTDB     url?action=clearTDB&clearTDB=SECRET_ID,TABLE_NAME
// addSingleTDBData    url?action=addSingleTDBData&addSingleTDBData=SECRET_ID,TABLE_NAME,Column1Value,Column2Value,...
// updateTDBData    url?action=addSingleTDBData&addSingleTDBData=SECRET_ID,TABLE_NAME,Column1Value, ,Column3Value,..
// delitTDBkeyColumn    url?action=updateTDBData&updateTDBData=SECRET_ID,TABLE_NAME,ColumnName,SearchValue,NewValue
// delitSingleTDBData    url?action=delitTDBkeyColumn&delitTDBkeyColumn=SECRET_ID,TABLE_NAME,ColumnName
// defaultAction    url?action=delitSingleTDBData&delitSingleTDBData=SECRET_ID,TABLE_NAME,ColumnName,SearchValue
