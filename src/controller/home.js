import view from "../view/home.html";
import "tailwindcss/tailwind.css";
import getData from "../utils/getData";

const Home = () => {
  const divElement = document.createElement("div");

  divElement.classList = "mx-4 xs:mx-4";
  divElement.innerHTML = view;

  const searchFood = divElement.querySelector("#searchFood");

  searchFood.addEventListener("click", async (e) => {
    let inputNamas = divElement.querySelector("#name");

    e.preventDefault();
    if (inputNamas.value === "") {
      console.error("El Campo esta vacio");
      return;
    }
    const foodName = inputNamas.value.replaceAll(" ", "%20");
    const fooData = divElement.querySelector("#dataFood");
    const data = await getData(foodName);
    const view = `
     ${data
       .map(
         (element) => `
     <div class="bg-green-900">
         <p class="text-2xl not-italic">${element.description}</p>
         ${element.foodNutrients.map((elements) => `
         <p class="text-2xl not-italic text-indigo-300	">${elements.name}:<span>${elements.number}</span>gr</p>`)}
     </div>`
       )
       .join("")}`;
    fooData.innerHTML = view;
    divElement.appendChild(fooData);
    console.log(fooData);
    inputNamas.value = "";
  });

  return divElement;
};

export default Home;
