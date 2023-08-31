/* eslint-disable react-hooks/rules-of-hooks */
import useCountry from "../hooks/useCountry";
import SingleCountry from "./SingleCountry";

const Countries = () => {

    const {dataCountries} = useCountry()

    return (
       <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
                <div className="flex-shrink-0">
                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">
                        This is the first example, In this case, we're fetching data from API and rendering it on the screen:
                    </span>
                </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-3">
                {
                    dataCountries.length > 0 ? 
                        dataCountries.map((item, index) => (
                            <div key={index}>
                                <SingleCountry objCountry={item}/>
                            </div>
                        ))
                    : 'Please Wait'
                }
            </div>
       </div>
    )
}

export default Countries