const getData = async (foodName) => {
  const API = `https://test-es.edamam.com/api/nutrition-data?app_id=2c08755c&app_key=eceafe470d37f3de02d43e472d2743be&ingr=1${foodName}`;

  try {
    const response = await fetch(API);
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log("Hay un Error", error);
  }
};

export default getData;
