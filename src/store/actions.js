import axios from 'axios';

export const LOADING_DATA = "loading_data";
export const GET_DATA = "get_data";
export const GET_DATA_ASYNC = "get_data_async";

export const loadingData = ()=>{
    return{
        type: LOADING_DATA
    }
}
export const getData = ()=>{
            return dispatch => {
                const url = `http://otis-app-ss-sc-dev.azurewebsites.net/api/signatureService?countryLangCode=en-us`
                dispatch(loadingData());
                // fetch(url)
                // .then(response => response.json())
                //     .then(res =>{
                //         const urlData = {};
                //         urlData.data = res.data;
                //         dispatch(getDataAsync(urlData))
                //         }
                //     )
                axios.get(url)
                .then(res =>{
                    const urlData = {};
                    urlData.data = res.data
                    dispatch(getDataAsync(urlData))
                    }
                 )
                }
}

export const getDataAsync = (data)=>{
    return{
        type: GET_DATA_ASYNC,
        payload: data
    }
}