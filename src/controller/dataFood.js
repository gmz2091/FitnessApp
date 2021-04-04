import view from "../view/dataFood.html";
import getData from "../utils/getData";

const DataFood = (user) => {
  const divElement = document.createElement("div");

  divElement.classList = "mx-4 xs:mx-4";
  divElement.innerHTML = view;

  const searchFood = divElement.querySelector("#searchFood");

  searchFood.addEventListener("submit", async (e) => {
    e.preventDefault();
    let inputNamas = divElement.querySelector("#name");

    if (inputNamas.value === "") {
      console.error("El Campo esta vacio");
      return;
    }
    const foodName = inputNamas.value.replaceAll(" ", "%20");
    const fooData = divElement.querySelector("#dataFood");
    const data = await getData(foodName);
    console.log(data[0].description, data[0].foodNutrients);
    const view = `
     ${data
       .map(
         (element) => `
     <div class="bg-green-900">
         <p class="text-2xl not-italic">${element.description}</p>
         ${element.foodNutrients
           .map(
             (elements) => `
         <p class="overflow-ellipsis overflow-hidden text-2xl not-italic text-indigo-300	">${elements.name}:<span>${elements.amount}</span>gr</p>`
           )
           .join("")}
      </div>`
       )
       .join("")}`;
    fooData.innerHTML = view;
    inputNamas.value = "";
    return fooData;
  });

  return divElement;
};

export default DataFood;
