import axios from "axios"

export const loadCounty = (id) => async (dispatch) => {
    const country = await axios.get(getCountryURL(country_name))
    dispatch({
        type:"FETCH_COUNTRY",
        payload:{
            country: country,
        }
    })
}