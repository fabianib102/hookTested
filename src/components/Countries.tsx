/* eslint-disable react-hooks/rules-of-hooks */
import useCountry from "../hooks/useCountry";

const Countries = () => {

    const {dataCountries, errorData} = useCountry()

    return (
       <div>
        {
            errorData ? 'Error calling the api'
            : 
            <>
                <h1>The countries are:</h1>
                {
                    dataCountries.length > 0 ? 
                        dataCountries.map((item, index) => (<h3 key={index}>{item.name.common}</h3>))
                    : 'Please Wait'
                }
            </>
        }
       </div>
    )
}

export default Countries