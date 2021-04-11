const getData = async (foodName) => {
  const cargando = document.querySelector("#cargando");
  const API = `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=QN3xmzbG3eLlzUJa3hAKLP8GQbhsuwvpjJVOArvV&query=${foodName}`;

  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Hay un Error", error);
  }
};

export default getData;
