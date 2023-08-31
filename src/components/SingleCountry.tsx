

const SingleCountry = ({objCountry}: any) => {
    return (
      <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="w-full">
          <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">{objCountry.name.common}</h3>
          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">{objCountry.population}</span>
          <div className="w-full">
            <a href={`/country/${objCountry.cca3}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
            </a>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
            <img src={objCountry.flags.png} className="h-9" alt={objCountry.flags.alt} />
        </div>
      </div>
    );
  }
  
  export default SingleCountry;