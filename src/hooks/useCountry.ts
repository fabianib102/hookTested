/* eslint-disable react-hooks/rules-of-hooks */
import { getCountriesByRegion } from "../services/countryServices";
import { useEffect, useState } from "react";

const useCountry = () => {
    const [dataCountries, setDataCountries] = useState<any[]>([]);
    const [errorData, setErrorData] = useState(false);

    useEffect(()=>{
    getCountriesByRegion().then(data => {
        setDataCountries(data)
        console.log(data)
    }).catch((error) => {
        console.log(error)
        setErrorData(true)
    })
    }, [])


    return {
        dataCountries,
        errorData
    }
}

export default useCountry