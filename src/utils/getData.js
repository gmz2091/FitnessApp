const getData = async (foodName, fdcId) => {
  const apiKEY = process.env.api_key;
  const FDCID = `${fdcId}`;
  const FOODS = `list?api_key=${apiKEY}&query=${foodName}&pageSize=10`;
  const API = `https://api.nal.usda.gov/fdc/v1/foods/`;

  try {
    const apiURL = foodName ? `${API}${FOODS}` : `${API}${FDCID}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Hay un Error", error);
  }
};

export default getData;
