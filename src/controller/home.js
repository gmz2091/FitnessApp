import view from "../view/home.html";
import "tailwindcss/tailwind.css";
import getData from "../utils/getData";

const Home = () => {
  const divElement = document.createElement("div");

  divElement.classList = "container";
  divElement.innerHTML = view;

  const searchFood = divElement.querySelector("#searchFood");

  searchFood.addEventListener("click", async (e) => {
    let inputNamas = divElement.querySelector("#name");
    

    e.preventDefault();
    if (inputNamas.value === "") {
      console.error("El Campo esta vacio");
      return;
    }
    const foodName = inputNamas.value.replaceAll(" ", "%20")
    const data = await getData(foodName);
    console.log(data);
    inputNamas.value = "";
  });

  return divElement;
};

export default Home;
