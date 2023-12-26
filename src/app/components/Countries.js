import CountryDetails from "./CountryDetails";

const fetchData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies');
    const data = await response.json();
    return { data }
  } catch (error) {
    return { error }
  }
};
const Countries = async () => {
  const { data } = await fetchData()
  if (data) {
    return (
      <div>
        <CountryDetails data={data} />
      </div>
    )
  }
}

export default Countries