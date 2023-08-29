const urlBase = "https://restcountries.com/v3.1";

export const getCountriesByRegion = async () => {
    const url = `${urlBase}/region/europe`;
    const response = await fetch(url).then();
    return await response.json()
}