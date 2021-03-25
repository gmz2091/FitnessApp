const getData = async () => {
  const API = `https://test-es.edamam.com/api/nutrition-data?app_id=2c08755c&app_key=eceafe470d37f3de02d43e472d2743be&from=0&to=16`;
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const myInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    mode: "cors",
    cache: "default",
  };

  try {
    const response = await fetch(API, myInit);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Hay un Error", error);
  }
};

export default getData;
